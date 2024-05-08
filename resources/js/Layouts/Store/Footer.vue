<template>
    <footer class="p-4 bg-white md:p-8 lg:p-10">
        <div class="mx-auto max-w-screen-xl text-center">
            <a href="/" class="flex justify-center items-center text-2xl font-semibold text-gray-900 ">
                <img src="/storage/images/settings/logo_large.png" alt="logo" class='md:w-[240px] w-48' />
            </a>
            <p class="my-6 text-gray-500">
                Transformando la minería con calidad y experiencia desde hace 20 años.
            </p>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Nosotros</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Comprar</a>
                </li>
                <li>
                    <a href="https://api.whatsapp.com/send/?phone=995028146&text&type=phone_number&app_absent=0"
                        class="mr-4 hover:underline md:mr-6 ">Contáctanos</a>
                </li>
                <li>
                    <a href="/cyd"
                        class="mr-4 hover:underline md:mr-6">Política de CyD</a>
                </li>
                <li>
                    <a href="/tyc"
                        class="mr-4 hover:underline md:mr-6">Términos y Condiciones</a>
                </li>
                <li>
                    <a href="/complaint" class="mr-4 hover:underline md:mr-6">Libro de Reclamaciones</a>
                </li>
            </ul>
            <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" class="hover:underline">THR
                    corporation</a>. Todos los derechos reservados.</span>
            <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" class="hover:underline">THR
                    corporation</a>. Todos los derechos reservados. | thrcorporation2020@gmail.com</span>
        </div>
    </footer>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        goTo(url) {
            window.location.href = url;
        }
    },
}
</script>