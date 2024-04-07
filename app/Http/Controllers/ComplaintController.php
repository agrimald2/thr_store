<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Complaint;

class ComplaintController extends Controller
{
    public function getComplaintForm(){
        return Inertia::render('Reclamaciones');
    }

    public function postComplaint(Request $request){
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'dni' => 'required|string|max:8',
            'email' => 'required|email|max:255',
            'phone' => 'required|string|max:15',
            'incidentDate' => 'required|date',
            'complaint' => 'required|string',
            'files' => 'nullable|array',
            'files.*' => 'file|max:2048', // assuming a max file size of 2MB
        ]);

        // Separate file data from other validated data to prevent array to string conversion error
        $fileData = $request->hasFile('files') ? $request->file('files') : null;
        unset($validatedData['files']);

        $complaint = Complaint::create($validatedData);

        if ($fileData) {
            $files = [];
            foreach ($fileData as $file) {
                $path = $file->store('complaint_files');
                $files[] = $path;
            }
            // Save the file paths as a JSON string in the 'files' column
            $complaint->files = json_encode($files);
            $complaint->save();
        }

        return redirect()->back()->with('success', 'Complaint has been filed successfully.');
    
    }
}
