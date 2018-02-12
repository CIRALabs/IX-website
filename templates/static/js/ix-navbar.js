var ixNav = (function () {
    var _navLocations = ["home", "about", "news", "locations", "peers", "faq", "links"];
    var _parentDiv, _navbardiv;
    
    var init = function () {
        _navbarDiv = document.getElementsByClassName("container-narrow-anchor")[0]
        _parentDiv = _navbarDiv.parentNode
        _initListeners();
        switchToContentPage(window.location.pathname);
    };

    var _navAway = function (fade) {
        $('.menu-li').removeClass("active");
        $('.ix-page').fadeTo(fade,0).addClass('hidden');
    }

    var _navTo = function(btn_id, page_ix_id){
        _parentDiv.insertBefore(document.getElementById(page_ix_id.substr(1)), _parentDiv.children[1])
        $(btn_id).addClass("active");
        $(page_ix_id).removeClass('hidden').fadeTo(200,1);
    }

    var switchToContentPage = function (loc) {
        _navAway(75)
        var _loc;
        var _isOnExistingPage = _navLocations.some( function(v) {
             _loc = v;
             return loc === v; 
            }
        );

        if (_isOnExistingPage) {
            _btn_id = ".menu-li-" + _loc;
            _page_ix_id = "#ix-page-" + _loc;
            _navTo(_page_ix_id, _btn_id);
        } else {
            _navTo(".menu-li-home", "#ix-page-home");
        }
    };

    var _initListeners = function() {
        $.each(_navLocations, function(i, val){
            $(".menu-btn-" + val).click(function() {
                _navAway(200)
                _navTo(".menu-li-" + val, "#ix-page-" + val);
            });
        });
    };

    return {
        init: init
    };
})()