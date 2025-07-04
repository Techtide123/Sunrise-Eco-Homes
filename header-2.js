document.write(`
        <header class="header-absolute sticky-header inner-page">
        <div class="container container-custom-one">
            <div class="nav-container d-flex align-items-center justify-content-between justify-content-lg-around">
                <!-- Site Logo -->
                <div class="site-logo">
                    <a href="index.html" class="main-logo"><img src="sunrise-img/logo.jpg" alt="Logo"
                            style="width: 110px;border-radius: 5px;"></a>
                    <a href="index.html" class="sticky-logo"><img src="sunrise-img/logo.jpg" alt="Logo"
                            style="width: 90px;"></a>
                </div>


                <!-- Main Menu -->
                <div class="nav-menu d-lg-flex align-items-center">

                    <!-- Navbar Close Icon -->
                    <div class="navbar-close">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>

                    <!-- Off canvas Menu  -->
                    <!-- <div class="toggle">
                        <a href="#" id="offCanvasBtn"><i class="fal fa-bars"></i></a>
                    </div> -->
                    <!-- Mneu Items -->
                    <div class="menu-items">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>

                            </li>
                            <li><a href="about.html">About Us</a></li>
                            <li>
                                <a href="index.html#rooms">Rooms</a>
                                <ul class="submenu">
                                    <li><a href="deluxe-room.html">Deluxe Room</a></li>
                                </ul>
                            </li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <!-- from pushed-item -->
                    <div class="nav-pushed-item"></div>
                </div>



                <!-- Header Info Pussed To Menu Wrap -->
                <div class="nav-push-item">
                    <!-- Header Info -->
                    <div class="header-info d-lg-flex align-items-center">
                        <div class="item">
                            <i class="fal fa-phone" style="background-color: #bead8e;"></i>
                            <span>Phone Number</span>
                            <a href="tel:+91 8249724355">
                                <h5 class="title">+91 8249724355</h5>
                            </a>
                        </div>
                        <div class="item">
                            <i class="fal fa-envelope" style="background-color: #bead8e;"></i>
                            <span>Email Address</span>
                            <a href="mailto:sunriseecohome@gmail.com">
                                <h5 class="title">sunriseecohome@gmail.com</h5>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Navbar Toggler -->
                <div class="navbar-toggler">
                    <span></span><span></span><span></span>
                </div>
            </div>
        </div>
    </header>
    
    `)