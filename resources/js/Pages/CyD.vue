<script setup>
import { Head } from '@inertiajs/vue3';
import StoreLayout from '@/Layouts/StoreLayout.vue';
</script>

<template>

    <Head title="Política de Devolución y Cambios" />
    <StoreLayout>
        <div class="font-sans text-gray-900 antialiased pt-20">
            <div class="pt-4 bg-gray-100">
                <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                    <div class="font-sans text-gray-900 antialiased">
                        <div class="pt-4 bg-gray-100">
                            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                                <div>
                                    <AuthenticationCardLogo />
                                </div>

                                <div
                                    class="w-full sm:max-w-2xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">
                                    <h1 class="text-2xl font-bold mb-4">Política de devolución y cambios</h1>
                                    <p class="mb-4">
                                        Brinda a todos sus clientes el derecho de restitución, sin expresión de causa,
                                        pudiendo ser solicitado dentro de los quince (15) días calendario posteriores a
                                        la entrega del producto; siempre y cuando, el cliente cumpla con las siguientes
                                        condiciones:
                                    </p>
                                    <ul class="list-disc pl-5 mb-4">
                                        <li>El producto adquirido en www.thr.com debe estar tal como fue entregado; es
                                            decir, con todas sus etiquetas originales, accesorios, empaques, repuestos,
                                            manuales, seguros, gráficas, adhesivos, cubiertas, entre otros; todos en
                                            buen estado y sin señales de uso y/o deterioro. Si algún componente falta o
                                            no se encuentra en las condiciones mencionadas se rechazará el cambio o
                                            devolución. Los empaques deben ser originales. Si el producto fue vendido
                                            con una promoción, la promoción también debe ser devuelta en conjunto con el
                                            producto principal.</li>
                                        <li>En caso el cliente detecte un defecto de fábrica en el producto y ya no
                                            desea el producto.</li>
                                        <li>Toda devolución es con previa coordinación llamando al +51 995028146</li>
                                        <li>El cliente debe acreditar ser el titular de la compra, mediante su
                                            comprobante fiscal /boleta de venta o factura.</li>
                                    </ul>
                                    <h2 class="text-xl font-semibold mb-2">La devolución del dinero podrá ser total o
                                        parcial dependiendo del caso:</h2>
                                    <h3 class="text-lg font-semibold mb-2">Total en los siguientes casos:</h3>
                                    <p class="mb-4">
                                        El producto no puede ser instalado y/o demora en la entrega del producto. En
                                        este caso, la devolución del dinero será del 100% y será devuelto a la tarjeta
                                        con la que se hizo el pago.
                                    </p>
                                    <h3 class="text-lg font-semibold mb-2">Parcial en los siguientes casos:</h3>
                                    <p class="mb-4">
                                        Cambio de producto por uno de menor valor, devolución parcial de mercadería. En
                                        este caso deberá enviar sus datos bancarios para hacer efectivo el reembolso del
                                        dinero al siguiente correo: thrcorporation@gmail.com. Se devolverá la diferencia
                                        entre los productos recibidos y los productos rechazados y/o devueltos.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </StoreLayout>

</template>