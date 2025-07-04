document.write(`
        <header class="header-absolute sticky-header inner-page">
        <div class="container container-custom-one">
            <div class="nav-container d-flex align-items-center justify-content-between">
                <!-- Main Menu -->
                <div class="nav-menu d-lg-flex align-items-center">

                    <!-- Navbar Close Icon -->
                    <div class="navbar-close">
                        <div class="cross-wrap"><span class="top"></span><span class="bottom"></span></div>
                    </div>

                    <!-- Off canvas Menu  -->
                    <div class="toggle">
                        <a href="#" id="offCanvasBtn"><i class="fal fa-bars"></i></a>
                    </div>
                    <!-- Mneu Items -->
                    <div class="menu-items">
                        <ul>
                            <li>
                                <a href="index.html">Home</a>
                                <ul class="submenu">
                                    <li><a href="index.html">Home One</a></li>
                                    <li><a href="index-2.html">Home Two</a></li>
                                    <li><a href="index-3.html">Home Three</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="room-grid.html">Rooms</a>
                                <ul class="submenu">
                                    <li><a href="room-grid.html">Room Grid</a></li>
                                    <li><a href="room-list.html">Room List</a></li>
                                    <li><a href="room-details.html">Room Details</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="news.html">News</a>
                                <ul class="submenu">
                                    <li><a href="news-details.html">News Details</a></li>
                                </ul>
                            </li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <!-- from pushed-item -->
                    <div class="nav-pushed-item"></div>
                </div>

                <!-- Site Logo -->
                <div class="site-logo">
                    <a href="index.html"><img src="assets/img/logo.png" alt="Logo"></a>
                </div>

                <!-- Header Info Pussed To Menu Wrap -->
                <div class="nav-push-item">
                    <!-- Header Info -->
                    <div class="header-info d-lg-flex align-items-center">
                        <div class="item">
                            <i class="fal fa-behance"></i>
                            <span>Phone Number</span>
                            <a href="tel:+90898787709">
                                <h5 class="title">+908 987 877 09</h5>
                            </a>
                        </div>
                        <div class="item">
                            <i class="fal fa-envelope"></i>
                            <span>Email Address</span>
                            <a href="mailto:info@webmail.com">
                                <h5 class="title">info@webmail.com</h5>
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