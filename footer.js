document.write(`
<footer class="footer-two" style="background-color: #1b1b1b; color: #ffffff;">
    <div class="footer-widget-area pt-100 pb-50">
        <div class="container">
            <div class="row gy-4">
                <!-- Logo and Description -->
                <div class="col-lg-3 col-md-6">
                    <div class="widget site-info-widget mb-4">
                        <div class="footer-logo mb-4">
                            <img src="sunrise-img/logo.jpg" alt="Logo" style="max-width: 150px; border-radius: 8px;">
                        </div>
                        <p style="text-align: justify; font-size: 14px;">
                            Sunrise Eco Homes, Daringbadi – A peaceful eco-resort offering cozy cottages, scenic views, and warm hospitality for your perfect hill escape.
                        </p>
                        <div class="social-links mt-4 d-flex gap-2">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                            <a href="#"><i class="fab fa-twitter"></i></a>
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>
                </div>

                <!-- Quick Links -->
                <div class="col-lg-3 col-md-6">
                    <div class="widget nav-widget mb-4">
                        <h4 class="widget-title mb-3">Quick Links</h4>
                        <ul style="list-style: none; padding-left: 0; font-size: 14px; line-height: 1.9;">
                            <li><a href="index.html" style="color: #ccc;">Home</a></li>
                            <li><a href="index.html#facilities" style="color: #ccc;">Services</a></li>
                            <li><a href="about-us.html" style="color: #ccc;">About Us</a></li>
                            <li><a href="contact.html" style="color: #ccc;">Contact Us </a></li>
                            <li><a href="index.html#rooms" style="color: #ccc;">Rooms</a></li>
                            <li><a href="gallery.html" style="color: #ccc;">Gallery</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Google Map -->
                <div class="col-lg-3 col-md-6">
                    <div class="widget contact-widget mb-4">
                        <h4 class="widget-title mb-3">Our Location</h4>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.8183584793082!2d84.1366579!3d19.9076937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a23195bbee4f067%3A0x4a63fb07d813e60d!2sSUNRISE%20ECO%20HOMES!5e1!3m2!1sen!2sin!4v1751623393614!5m2!1sen!2sin"
                            width="100%" height="160" style="border:0; border-radius: 8px;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>

                <!-- Contact Info -->
                <div class="col-lg-3 col-md-6">
                    <div class="widget contact-widget mb-4">
                        <h4 class="widget-title mb-3">Contact Us</h4>
                       <div class="contact-box mb-3">
                            <i class="flaticon-call" style="margin-right: 8px;"></i>
                            <span style="font-size: 14px;">+91 8249724355</span>
                        </div>
                        <div class="contact-box mb-3">
                            <i class="flaticon-message" style="margin-right: 8px;"></i>
                            <span style="font-size: 14px;"><a href="mailto:sunriseecohome@gmail.com" style="color: #ccc;">sunriseecohome@gmail.com</a></span>
                        </div>
                        <div class="contact-box">
                            <i class="flaticon-location-pin" style="margin-right: 8px;"></i>
                            <span style="font-size: 14px;">Daringbadi, Pole, Kandhamal, Pin:762104</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Copyright -->
    <div class="copyright-area pt-3 pb-3" style="background-color: #141414;">
        <div class="container">
            <div class="row align-items-center text-center text-md-start">
                <div class="col-md-4 mb-2 mb-md-0">
                    <p class="mb-0" style="color: #aaa; font-size: 13px;">© 2025 Sunrise Eco Homes. All rights reserved.</p>
                </div>
                <div class="col-md-4 mb-2 mb-md-0" style="text-align: center;">
                    <p class="mb-0" style="color: #aaa; font-size: 13px;">Powered By <a href="https://thetechtide.site" style="color: #aaa;"><img src="sunrise-img/techtide-logo.jpeg" alt="Logo" style="max-width: 100px;"></a></p>
                </div>
                <div class="col-md-4 text-md-end">
                    <ul class="d-flex justify-content-center justify-content-md-end list-unstyled gap-3 mb-0" style="font-size: 13px;">
                        <li><a href="#" style="color: #aaa;">Terms of Use</a></li>
                        <li><a href="#" style="color: #aaa;">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
<!--Start of Tawk.to Script-->
    <script>
    (function (w, d, s, u) {
    w.gbwawc = {
    url: u,
    options: {
            waId: "+91 8249724355",
            siteName: "Sunrise Eco Homes",
            siteTag: "Available",
            siteLogo: "https://sunrise-eco-homes.vercel.app/sunrise-img/logo.jpg",
            widgetPosition: "LEFT",
            triggerMessage: "Need any Help ",
            welcomeMessage: "Welcome to Sunrise Eco Homes.. How can we help you ?",
            brandColor: "#25D366",
            messageText: "",

        },
    };
    var h = d.getElementsByTagName(s)[0],
    j = d.createElement(s);
    j.async = true;
    j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
    h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://waw.gallabox.com");
    </script>
<!--End of Tawk.to Script-->
`);
