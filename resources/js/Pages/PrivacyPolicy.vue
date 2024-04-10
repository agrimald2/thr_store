<script setup>
import { Head } from '@inertiajs/vue3';
import StoreLayout from '@/Layouts/StoreLayout.vue';
</script>

<template>

    <Head title="Terms and Conditions" />
    <StoreLayout>
        <div class="font-sans text-gray-900 antialiased pt-20">
            <div class="pt-4 bg-gray-100">
                <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                    <div>
                        <AuthenticationCardLogo />
                    </div>

                    <div class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">
                        <h1 class="text-2xl font-bold mb-4">Términos y condiciones</h1>
                        <h2 class="text-xl font-semibold mb-2">Uso del portal web</h2>
                        <p class="mb-4">
                            El usuario se encontrará autorizado a realizar compras desde nuestra tienda virtual,
                            comprometiéndose a proveer información válida y cierta como parte del proceso de compra,
                            evitando gestiones fraudulentas y/o maliciosas. Para comprar productos en el sitio web, es
                            necesario estar registrado, teniendo un acceso personalizado, confidencial y seguro.
                        </p>

                        <h2 class="text-xl font-semibold mb-2">Compras por la web</h2>
                        <p class="mb-4">
                            a. Se realizará la venta a Nivel Nacional (Lima y Provincias) a través de la página web
                            www.thrcorporation.com<br>
                            b. Para el caso de venta a provincia, hay un costo de envió, el cual varía de acuerdo con la
                            zona y/o provincia. (Los envíos por el momento solo se dan al centro de la ciudad y de
                            acuerdo con la consolidación de carga).
                        </p>

                        <h2 class="text-xl font-semibold mb-2">Capacidad para contratar</h2>
                        <p class="mb-4">
                            El portal web ofrece los bienes y servicios a los usuarios que tengan capacidad legal para
                            contratar o celebrar actos jurídicos según la legislación peruana vigente. Los menores de
                            edad no se encuentran autorizados para utilizar este sitio web.
                        </p>

                        <h2 class="text-xl font-semibold mb-2">Medios de pago</h2>
                        <p class="mb-4">
                            Para las compras realizadas a través de la web www.thrcorporation.com se aceptan pagos a
                            través de:<br>
                            Tarjetas de débito: Visa<br>
                            Tarjetas de crédito: Visa, MasterCard, Diners y American Express.<br>
                            Boleta del banco: Es una modalidad de pago en la cual el cliente hace la reserva de su
                            solicitud de compra y se generará un código de pago que se mostrará luego de la confirmación
                            de la compra. El código generado será usado para el pago por la banca por internet o agencia
                            de su banco o cualquier comercio que acepte PagoEfectivo.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </StoreLayout>

</template>