<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import StoreLayout from '@/Layouts/StoreLayout.vue';
import axios from 'axios';
</script>

<template>

    <Head title="Formulario de Reclamación" />
    <StoreLayout>
        <div class="font-sans text-gray-900 antialiased pt-20">
            <div class="pt-4 bg-gray-100">
                <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0 py-5">
                    <div class="text-center">
                        <h1 class="text-2xl font-bold">Libro de Reclamaciones</h1>
                        <h2 class="text-xl">THR CORPORATION</h2>
                        <h3 class="text-lg">20606613041</h3>
                        <p>
                            Tienda Online: las ventas online no aplican a menores de 18 años <br>
                            Establecimiento comercial: tienda online www.thrcorporation.com
                        </p>
                    </div>
                    <div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg">
                        <form @submit.prevent="submitForm">
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-700">Nombre
                                    completo</label>
                                <input type="text" id="name" v-model="form.name"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required>
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium text-gray-700">Correo
                                    electrónico</label>
                                <input type="email" id="email" v-model="form.email"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required>
                            </div>

                            <div class="mb-4">
                                <label for="phone" class="block text-sm font-medium text-gray-700">Celular</label>
                                <input type="tel" id="phone" v-model="form.phone"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required>
                            </div>

                            <div class="flex mb-4 -mx-2">
                                <div class="w-1/2 px-2">
                                    <label for="dni" class="block text-sm font-medium text-gray-700">TIPO DE DOC</label>
                                    <select id="dni" v-model="form.doc_type"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required>
                                        <option value="DNI">DNI</option>
                                        <option value="CE">CE</option>
                                        <option value="PASAPORTE">PASAPORTE</option>
                                    </select>
                                </div>
                                <div class="w-1/2 px-2">
                                    <label for="dni" class="block text-sm font-medium text-gray-700">DOCUMENTO</label>
                                    <input type="text" id="dni" v-model="form.doc_number"
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required>
                                </div>
                            </div>

                            <div class="mb-4">
                                <label for="complaint" class="block text-sm font-medium text-gray-700">Detalles del BIEN
                                    o PRODUCTO contratado</label>
                                <textarea id="complaint" v-model="form.complaint" rows="4"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required></textarea>
                            </div>

                            <div class="mb-4">
                                <label for="incidentDate" class="block text-sm font-medium text-gray-700">Fecha del
                                    hecho</label>
                                <input type="date" id="incidentDate" v-model="form.incidentDate"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required>
                            </div>

                            <div class="mb-4">
                                <label for="complaint" class="block text-sm font-medium text-gray-700">Detalle del
                                    reclamo</label>
                                <textarea id="complaint" v-model="form.complaint" rows="4"
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                    required></textarea>
                            </div>

                            <div class="mb-4">
                                <label for="files" class="block text-sm font-medium text-gray-700">Adjuntar
                                    archivos</label>
                                <input type="file" id="files" ref="files" @change="handleFilesUpload" multiple
                                    class="mt-1 block w-full">
                            </div>

                            <div class="mb-4">
                                <label for="termsCheckbox" class="flex items-center">
                                    <input type="checkbox" id="termsCheckbox" v-model="form.termsAgreement"
                                        class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        required>
                                    <span class="ml-2 block text-sm font-medium text-gray-700">Me encuentro conforme con
                                        los términos de mi reclamo o queja*</span>
                                </label>
                            </div>

                            <div class="mb-4 text-sm">
                                La formulación del reclamo no impide acudir a otras vías de solución de controversias ni
                                es requisito previo para interponer una denuncia ante el INDECOPI.
                                El proveedor debe dar respuesta al reclamo o queja en un plazo no mayor a quince (15)
                                días hábiles, el cuál es improrrogable.
                            </div>

                            <div class="flex justify-end">
                                <button type="submit"
                                    class="inline-flex items-center px-4 py-2 bg-gray-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">Enviar
                                    Reclamo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div id="alert-complaint"
            class="slide-in-fwd-right max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg fixed right-0 bottom-0 mb-4 mr-4 z-30 hidden"
            role="alert">
            <div class="flex p-4">
                <div class="flex-shrink-0">
                    <svg class="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm text-gray-700">
                        Reclamo Enviado
                    </p>
                </div>
            </div>
        </div>
    </StoreLayout>
</template>



<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                doc_type: '',
                doc_number: '',
                incidentDate: '',
                complaint: '',
                files: []
            },
            errors: {}
        }
    },
    methods: {
        handleFilesUpload(event) {
            this.form.files = Array.from(event.target.files);
        },
        submitForm() {
            axios.post('/complaint', this.form)
                .then(response => {
                    // Handle success response
                    console.log('Form submitted successfully', response);
                    document.getElementById('alert-complaint').classList.remove('hidden');
                    setTimeout(() => {
                        this.$inertia.visit('/');
                    }, 3000);
                })
                .catch(error => {
                    // Handle error response
                    console.error('Error submitting form', error);
                    // Update 'errors' object if it's a validation error
                    if (error.response && error.response.status === 422) {
                        this.errors = error.response.data.errors;
                    }
                });
        },
        resetFrom() {

        }
    },
    computed: {
    }
}
</script>
<style></style>