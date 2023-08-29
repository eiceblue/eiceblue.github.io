(function($) {


    $.fn.initDropdownMenu = function() {
        var menuBar = this;
        var menuBarRight = menuBar.offset().left + menuBar.outerWidth();
        var prevDropdown = null;
        // alert('12');
        this.find(' > li').hover(function () {
            var menuItem = $(this);
            var menuItem_style = $(this).attr('class');
            // console.log(menuItem_style);

            // if(){}
            if(menuItem_style == 'mi211'){
                // alert('first');
                var panel2 = $('<div class="dropdown dropdown2" style="display: block;"><div class="boxswitch dropdown_new_menu">\n' +
                    '    <ul>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active1" checked="">\n' +
                    '            <label class="yyds" for="active1">.NET APIs</label>\n' +
                    '            <div class="content-box content-box-first">\n' +
                    '                <div class="content-boxs">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>.NET Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-office-for-net.html">Spire.Office for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-office-viewer-net.html">Spire.OfficeViewer for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/word-for-net-introduce.html">Spire.Doc for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/word-viewer-net-introduce.html">Spire.DocViewer for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/excel-for-net-introduce.html">Spire.XLS for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spreadsheet-for-net.html">Spire.Spreadsheet for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/presentation-for-net-introduce.html">Spire.Presentation for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-for-net-introduce.html">Spire.PDF for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-viewer.html">Spire.PDFViewer for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-viewer-asp.html">Spire.PDFViewer for ASP.NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/data-export-for-net-intro.html">Spire.DataExport for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/barcode-for-net.html">Spire.Barcode for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/email-for-net.html">Spire.Email for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/ocr-for-net.html">Spire.OCR for .NET</a></li>\n' +
                    '                    </ol>\n' +
                    '                    <ol class="A2">\n' +
                    '                        <li>Free Products</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-office-for-net-free.html">Free Spire.Office for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-doc-component.html">Free Spire.Doc for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-word-viewer-net.html">Free Spire.DocViewer for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-xls-component.html">Free Spire.XLS for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-presentation-component.html">Free Spire.Presentation for .NET</a>\n' +
                    '                        </li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-pdf-component.html">Free Spire.PDF for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-pdf-viewer-net.html">Free Spire.PDFViewer for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/freepdfconverter.html">Free Spire.PDFConverter for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-dataexport-component.html">Free Spire.DataExport for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/barcode-for-net-introduce.html">Free Spire.Barcode for .NET</a></li>\n' +
                    '                    </ol>\n' +
                    '                    <ol class="A3">\n' +
                    '                        <li>WPF Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-office-for-wpf.html">Spire.Office for WPF</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/word-for-wpf-introduce.html">Spire.Doc for WPF</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/word-viewer-wpf-introduce.html">Spire.DocViewer for WPF</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/excel-for-wpf-introduce.html">Spire.XLS for WPF</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-for-wpf-introduce.html">Spire.PDF for WPF</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-viewer-wpf.html">Spire.PDFViewer for WPF</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active4">\n' +
                    '            <label class="yyds2" for="active4">Java APIs</label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>JAVA Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/office-for-java.html">Spire.Office for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/doc-for-java.html">Spire.Doc for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/xls-for-java.html">Spire.XLS for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/presentation-for-java.html">Spire.Presentation for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-for-java.html">Spire.PDF for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/barcode-for-java.html">Spire.Barcode for Java</a></li>\n' +
                    '                    </ol>\n' +
                    '                    <ol class="A2">\n' +
                    '                        <li>Free Products</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-office-for-java.html">Free Spire.Office for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-doc-for-java.html">Free Spire.Doc for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-xls-for-java.html">Free Spire.XLS for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-presentation-for-java.html">Free Spire.Presentation for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-pdf-for-java.html">Free Spire.PDF for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-barcode-for-java.html">Free Spire.Barcode for Java</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active3">\n' +
                    '            <label class="yyds2" for="active3">C++ APIs</label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>C++ Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/office-for-CPP.html">Spire.Office for C++</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/doc-for-CPP.html">Spire.Doc for C++</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/xls-for-CPP.html">Spire.XLS for C++</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-for-CPP.html">Spire.PDF for C++</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/presentation-for-CPP.html">Spire.Presentation for C++</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </li>\n' +
					                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active3">\n' +
                    '            <label class="yyds2" for="active3">Python APIs</label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Python Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/doc-for-python.html">Spire.Doc for Python</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/xls-for-python.html">Spire.XLS for Python</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-for-python.html">Spire.PDF for Python</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/presentation-for-python.html">Spire.Presentation for Python</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active5">\n' +
                    '            <label class="yyds2" for="active5">Android APIs</label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Android Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/office-for-android-via-java.html">Spire.Office for Android via Java</a>\n' +
                    '\n' +
                    '\n' +
                    '                        </li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/doc-for-android-via-java.html">Spire.Doc for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/xls-for-android-via-java.html">Spire.XLS for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/presentation-for-android-via-java.html">Spire.Presentation for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/pdf-for-android-via-java.html">Spire.PDF for Android via Java</a></li>\n' +
                    '                    </ol>\n' +
                    '                    <ol class="A2">\n' +
                    '                        <li>Free Products</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-office-for-android-via-java.html">Free Spire.Office for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-doc-for-android-via-java.html">Free Spire.Doc for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-XLS-for-android-via-java.html">Free Spire.XLS for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-presentation-for-android-via-java.html">Free Spire.Presentation for Android via Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/free-pdf-for-android-via-java.html">Free Spire.PDF for Android via Java</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active6">\n' +
                    '            <label class="yyds2" for="active6">Cloud APIs</label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Cloud Libraries</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-cloud-office-for-net.html">Spire.Cloud.Office</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-cloud-word-for-net.html">Spire.Cloud.Word</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-cloud-excel-for-net.html">Spire.Cloud.Excel</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Introduce/spire-cloud-powerpoint-for-net.html">Spire.Cloud.PowerPoint</a>\n' +
                    '                        </li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '<!--        <li>-->\n' +
                    '<!--            <input type="radio" name="check" id="active2">-->\n' +
                    '<!--            <label class="yyds2" for="active2">WPF APIs</label>-->\n' +
                    '\n' +
                    '<!--            <div class="content-box">-->\n' +
                    '<!--                <div class="content-boxs boxs_height">-->\n' +
                    '<!--                    <ol class="A1">-->\n' +
                    '<!--                        <li>WPF Libraries</li>-->\n' +
                    '<!--                        <li><a href="/Introduce/spire-office-for-wpf.html">Spire.Office for WPF</a></li>-->\n' +
                    '<!--                        <li><a href="/Introduce/word-for-wpf-introduce.html">Spire.Doc for WPF</a></li>-->\n' +
                    '<!--                        <li><a href="/Introduce/word-viewer-wpf-introduce.html">Spire.DocViewer for WPF</a></li>-->\n' +
                    '<!--                        <li><a href="/Introduce/excel-for-wpf-introduce.html">Spire.XLS for WPF</a></li>-->\n' +
                    '<!--                        <li><a href="/Introduce/pdf-for-wpf-introduce.html">Spire.PDF for WPF</a></li>-->\n' +
                    '<!--                        <li><a href="/Introduce/pdf-viewer-wpf.html">Spire.PDFViewer for WPF</a></li>-->\n' +
                    '<!--                    </ol>-->\n' +
                    '<!--                </div>-->\n' +
                    '<!--            </div>-->\n' +
                    '\n' +
                    '<!--        </li>-->\n' +
                    '    </ul>\n' +
                    '</div></div>').appendTo(menuItem);


            }
            else if(menuItem_style == 'mi214'){
                var panel2 = $('<div class="dropdown dropdown2 dropdownsingle" style="display: block;"><div class="boxswitch dropdown_new_menu">\n' +
                    '    <ul>\n' +
                    '        <li>\n' +
                    '            <div class="content-box content-box-first">\n' +
                    '                <div class="content-boxs">\n' +
                    '                    <ol class="A1">\n' +
                    '<li class="mi197"><a href="https://www.e-iceblue.com/Download/product-list.html">Order Online</a></li>' +
                    '<li class="mi219"><a href="https://www.e-iceblue.com/Download/product-list.html">Download Centre</a></li>' +
                    '<li class="mi1080"><a href="https://www.e-iceblue.com/TemLicense.html">Temporary License</a></li>' +
                    '<li class="mi295"><a href="https://www.e-iceblue.com/Misc/purchase-policies.html">Purchase Policies</a></li>' +
                    '<li class="mi296"><a href="https://www.e-iceblue.com/Tutorials/Licensing/Renew-Subcription.html">Renewal Policies</a></li>' +
                    '<li class="mi326"><a href="https://www.e-iceblue.com/Misc/find.html">Find A Reseller</a></li>' +
                    '<li class="mi293"><a href="https://www.e-iceblue.com/Misc/purchase-faqs.html">Purchase FAQS</a></li>' +
                    '<li class="mi147"><a href="https://www.e-iceblue.com/Misc/support-faqs.html">Support FAQs</a></li>' +
                    '<li class="mi217"><a href="https://www.e-iceblue.com/Tutorials/Licensing/Licensing.html">How to Apply License</a></li>' +
                    '<li class="mi291"><a href="https://www.e-iceblue.com/Tutorials/Licensing/License-Agreement.html">License Agreement</a></li>' +
                    '<li class="mi836"><a href="https://www.e-iceblue.com/privacypolicy.html">Privacy Policy</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '    </ul>\n' +
                    '</div></div>').appendTo(menuItem);
            }
            else if(menuItem_style == 'mi216'){
                var panel2 = $('<div class="dropdown dropdown2 dropdownsingle" style="display: block;"><div class="boxswitch dropdown_new_menu">\n' +
                    '    <ul>\n' +
                    '        <li>\n' +
                    '            <div class="content-box content-box-first">\n' +
                    '                <div class="content-boxs">\n' +
                    '                    <ol class="A1">\n' +
                    '<li class="mi141"><a href="https://www.e-iceblue.com/forum">Forum</a></li>' +
                    '<li class="mi335"><a href="https://www.e-iceblue.com/LiveDemo.html">Live Demo</a></li>' +
                    '<li class="mi314"><a href="https://www.e-iceblue.com/Misc/customized-demo.html">Customized Demo</a></li>' +
                    '<li class="mi379"><a href="https://eiceblue.github.io">Code Samples</a></li>' +
                    '<li class="mi1041">' +
                    '<a href="https://www.e-iceblue.com/news.html">Newsletter</a>' +
                    '<div class="menu-subscribe">' +
                    '<a href="https://www.e-iceblue.com/newsletter-subscribe.html">Subscribe</a>' +
                    '<a href="https://www.e-iceblue.com/Unsubscribe-Newsletter.html">Unsubscribe</a></div>' +
                    '</li>' +
                    '<li class="mi1017"><a href="https://www.e-iceblue.com/misc/apireference.html">API Reference</a></li>\n' +
                    '<li class="mi1017"><a href="https://www.e-iceblue.com/blog.html">Blog</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '    </ul>\n' +
                    '</div></div>').appendTo(menuItem);
            }
            else if(menuItem_style == 'mi315'){
                var panel2 = $('<div class="dropdown dropdown2" style="display: block;"><div class="boxswitch dropdown_new_menu">\n' +
                    '    <ul>\n' +
                    '    <li class="menu-tutorials">Product Name</li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active11" checked="">\n' +
                    '            <label class="tutorials1" for="active11"><span>Spire.Doc</span></label>\n' +
                    '            <div class="content-box content-box-first">\n' +
                    '                <div class="content-boxs">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Spire.Doc/Spire.Doc-Program-Guide/Spire.Doc-Program-Guide-Content.html">Spire.Doc for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Java/Spire.Doc-for-Java/Program-Guide/Spire.Doc-Program-Guide-Content-for-Java.html">Spire.Doc for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/C++/Spire.Doc-for-C++/Program-Guide/Spire.Doc-for-C++-Program-Guide-Content.html">Spire.Doc for C++</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +

                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active12">\n' +
                    '            <label class="tutorials2" for="active12"><span>Spire.XLS</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Spire.XLS/Spire.XLS-Program-Guide/Spire.XLS-Program-Guide-Content.html">Spire.XLS for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Java/Spire.XLS-for-Java/Program-Guide/Spire.XLS-Program-Guide-Content-for-Java.html">Spire.XLS for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/C++/Spire.XLS-for-C++/Program-Guide/Spire.XLS-for-C++-Program-Guide-Content.html">Spire.XLS for C++</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Python/Spire.XLS-for-Python/Program-Guide/Spire.XLS-for-Python-Program-Guide-Content.html">Spire.XLS for Python</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span>Spire.PDF</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Spire.PDF/Spire.PDF-Program-Guide/Spire.PDF-Program-Guide-Content.html">Spire.PDF for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/JAVA/Spire.PDF-for-JAVA/Program-Guide/Spire.PDF-Program-Guide-Content-for-JAVA.html">Spire.PDF for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/C++/Spire.PDF-for-C++/Program-Guide/Spire.PDF-for-Java-Program-Guide-Content.html">Spire.PDF for C++</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span>Spire.Presentation</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Spire.Presentation/Program-Guide/Spire.Presentation-Program-Guide-Content.html">Spire.Presentation for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Java/Spire.Presentation-for-Java/Program-Guide/Spire.Presentation-Program-Guide-Content-for-Java.html">Spire.Presentation for Java</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/C++/Spire.Presentation-for-C++/Program-Guide/Spire.Presentation-for-C++-Program-Guide-Content.html">Spire.Presentation for C++</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span>Spire.Barcode</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/NET/Spire.Barcode-for-.NET/Program-Guide/Spire.Barcode-for-.NET-Program-Guide-Content.html">Spire.Barcode for .NET</a></li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/Spire.Barcode-for-JAVA/Getting-Started/How-to-Create-Barcode-Using-Spire.Barcode-for-Java.html">Spire.Barcode for Java</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span>Spire.Email</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/NET/Spire.Email-for-.NET/Program-Guide/Spire.Email-for-.NET-Program-Guide-Content.html">Spire.Email for .NET</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span>Spire.OCR</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/NET/Spire.OCR-for-.NET/Program-Guide/Spire.OCR-for-.NET-Program-Guide-Content.html">Spire.OCR for .NET</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active14" checked="">\n' +
                    '            <label class="tutorials2" for="active14"><span>Spire.DocViewer</span></label>\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/NET/Spire.DocViewer-for-.NET/Program-Guide/Spire.DocViewer-for-.NET-Program-Guide-Content.html">Spire.DocViewer for .NET</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span>Spire.PDFViewer</span></label>\n' +
                    '\n' +
                    '            <div class="content-box">\n' +
                    '                <div class="content-boxs boxs_height">\n' +
                    '                    <ol class="A1">\n' +
                    '                        <li>Platform</li>\n' +
                    '                        <li><a href="https://www.e-iceblue.com/Tutorials/NET/Spire.PDFViewer-for-.NET/Program-Guide/Spire.PDFViewer-for-.NET-Program-Guide-Content.html">Spire.PDFViewer for .NET</a></li>\n' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span><a href="https://www.e-iceblue.com/Tutorials/Spire.Spreadsheet/Spire.Spreadsheet-Program-Guide/How-to-Open-and-View-Excel-in-Windows-Form-using-Spire.Speadsheet.html">Spire.SpreadSheet</a></span></label>\n' +
                    '        </li>\n' +
                    '        <li>\n' +
                    '            <input type="radio" name="check" id="active13">\n' +
                    '            <label class="tutorials2" for="active13"><span><a href="https://www.e-iceblue.com/Tutorials/NET/Spire.Cloud/Program-Guide/Install-Spire.Cloud.Office-for-.NET-on-Windows.html">Spire.Cloud</a></span></label>\n' +
                    '        </li>\n' +



                    '    </ul>\n' +
                    '</div></div>').appendTo(menuItem);
            }
            else if(menuItem_style == 'mi218'){
                var panel2 = $('<div class="dropdown dropdown2 dropdownsingle" style="display: block;"><div class="boxswitch dropdown_new_menu">\n' +
                    '    <ul>\n' +
                    '        <li>\n' +
                    '            <div class="content-box content-box-first">\n' +
                    '                <div class="content-boxs">\n' +
                    '                    <ol class="A1">\n' +
                    '<li class="mi142"><a href="https://www.e-iceblue.com/Misc/about-us.html">About Us</a></li>' +
                    '<li class="mi220"><a href="https://www.e-iceblue.com/Misc/maillist.html">Contact Us</a></li>' +
                    '<li class="mi327"><a href="https://www.e-iceblue.com/Misc/partner.html">Partner</a></li>' +
                    '<li class="mi146"><a href="https://www.e-iceblue.com/Misc/reseller.html">Become Our Reseller</a></li>' +
                    '<li class="mi292"><a href="https://www.e-iceblue.com/Misc/affiliate.html">Affiliate</a></li>' +
                    '<li class="mi1069"><a href="https://www.e-iceblue.com/Misc/paid-support.html ">Paid Support</a></li>' +
                    '<li class="mi144"><a href="https://www.e-iceblue.com/Misc/our-customers.html">Our Customers</a></li>' +
                    '<li class="mi336"><a href="https://www.e-iceblue.com/Misc/reviews.html">Reviews</a></li>' +
                    '                    </ol>\n' +
                    '                </div>\n' +
                    '\n' +
                    '            </div>\n' +
                    '        </li>\n' +
                    '    </ul>\n' +
                    '</div></div>').appendTo(menuItem);
            }



            else{
                if(!menuItem.data('init')){
                    var panel = $('<div class="dropdown"></div>').appendTo(menuItem);
                    // console.log(panel);

                    $('>ul', menuItem).each(function(i2, subList) {
                        var column = $('<div class="column"></div>').appendTo(panel);
                        if(i2 > 0) {
                            column.addClass('right');
                        }
                        subList = $(subList);
                        var prev = subList.prev();
                        if(prev.hasClass('separator')) {
                            prev.appendTo(column);
                        } else {
                            var listInSubList = $('>li>ul', subList);
                            if(listInSubList.length > 0) {
                                var separator = $('>li:first>a', subList).text();
                                $('<div class="separator">' + separator +'</div>').appendTo(column);
                                var container = $('<ul></ul>');
                                $('>li', subList).each(function(i3, item3) {
                                    if(i3 == 0) {
                                        $(item3).find('>ul>li').appendTo(container);
                                    } else {
                                        if($(item3).find('>ul').length > 0) {
                                            $(item3).find('>ul>li').appendTo(container);
                                        } else {
                                            $(item3).appendTo(container);
                                        }
                                    }
                                });
                                subList.empty();
                                container.find('li').appendTo(subList);
                            }
                        }
                        subList.appendTo(column);
                    });
                    menuItem.data('init', true)
                }
            }








            var currDropdown = menuItem.find(' > div.dropdown');
            if(prevDropdown != null) {
                if(currDropdown.length == 0 || currDropdown[0] != prevDropdown) {
                    $(prevDropdown).stop(true, true).hide();
                    prevDropdown = null;
                }
            }

            if(currDropdown.length > 0) {
                if(menuItem.offset().left + currDropdown.outerWidth() > menuBarRight) {
                    var left = menuBarRight - currDropdown.outerWidth();
                    currDropdown.css('left', left + 'px');

                    var bgLeft = menuItem.outerWidth() / 2 - 6 + menuItem.offset().left - left;
                    var bgPosition = currDropdown.css('background-position');
                    if(!bgPosition) {
                        //ie
                        bgPosition = bgLeft + 'px ' + currDropdown.css('background-positionY');
                    } else {
                        bgPosition = bgPosition.replace(/^([^\s]+)\s+(.+)$/i, bgLeft + 'px $2');
                    }
                    currDropdown.css('background-position', bgPosition);
                }

                prevDropdown = currDropdown[0];
                currDropdown.stop(true, true).slideDown(100);
            }
        }, function() {
            $(this).find(' > div.dropdown2').stop(true, true).delay(800).fadeOut(1);
            $(this).find(' > div.dropdown').stop(true, true).delay(800).fadeOut(1);
            $(this).find(' > div.dropdown2').remove();  //移出
        });

        return this;
    };


    $('#menu .content-boxs').css('top','65px');
    // alert('222');

    $('#menu').on('mouseenter', '.yyds', function () {
        alert('111');
        $(".dropdown2").css("height","610px");
        $("#menu .content-box-first").css("display","block");
        $("#menu .yyds2").css("background-color","#d2d2d2");
        $(this).css("background-color","#e5e5e5");
    });
    $('#menu').on('mousemove', '.yyds', function () {
        $(".dropdown2").css("height","610px");
        $("#menu .content-box-first").css("display","block");
        $("#menu .yyds2").css("background-color","#d2d2d2");
        $(this).css("background-color","#e5e5e5");
    });

    $('#menu').on('mouseenter', '.yyds2', function () {
        $(".dropdown2").css("height","390px");
        $("#menu .content-box-first").css("display","none");
        $("#menu .yyds").css("background-color","#d2d2d2");
        $("#menu .yyds2").css("background-color","#d2d2d2");
        $(this).css("background-color","#e5e5e5");
    });
    $('#menu').on('mousemove', '.yyds2', function () {
        $(".dropdown2").css("height","390px");
        $("#menu .content-box-first").css("display","none");
        $("#menu .yyds").css("background-color","#d2d2d2");
        $("#menu .yyds2").css("background-color","#d2d2d2");
        $(this).css("background-color","#e5e5e5");
    });



    $('#menu').on('mouseenter', '.tutorials1', function () {
        // $(".dropdown2").css("height","610px");
        $("#menu .content-box-first").css("display","block");
        // $("#menu .yyds2").css("background-color","#d2d2d2");
        // $(this).css("background-color","#e5e5e5");
    });
    $('#menu').on('mousemove', '.tutorials1', function () {
        // $(".dropdown2").css("height","610px");
        $("#menu .content-box-first").css("display","block");
        // $("#menu .yyds2").css("background-color","#d2d2d2");
        // $(this).css("background-color","#e5e5e5");
    });

    $('#menu').on('mouseenter', '.tutorials2', function () {
        // $(".dropdown2").css("height","325px");
        $("#menu .content-box-first").css("display","none");
        // $("#menu .yyds").css("background-color","#d2d2d2");
        // $("#menu .yyds2").css("background-color","#d2d2d2");
        // $(this).css("background-color","#e5e5e5");

    });
    $('#menu').on('mousemove', '.tutorials2', function () {
        // $(".dropdown2").css("height","325px");
        $("#menu .content-box-first").css("display","none");
        // $("#menu .yyds").css("background-color","#d2d2d2");
        // $("#menu .yyds2").css("background-color","#d2d2d2");
        // $(this).css("background-color","#e5e5e5");
    });

    // alert('333');




})(jQuery);