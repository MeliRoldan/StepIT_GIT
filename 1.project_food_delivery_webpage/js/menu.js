$(function () {
    //RANGE SLIDER
    let min = 10;
    let max = 90;
    const calcLeftPosition = value => 100 / (90 - 10) *  (value - 10);
    $('#rangeMin').on('input', function(e) {
        const newValue = parseInt(e.target.value);
        if (newValue > max) return;
        min = newValue;
        $('#thumbMin').css('left', calcLeftPosition(newValue) + '%');
        $('#min').html(newValue);
        $('#line').css({
            'left': calcLeftPosition(newValue) + '%',
            'right': (100 - calcLeftPosition(max)) + '%'
        });
    });
    $('#rangeMax').on('input', function(e) {
        const newValue = parseInt(e.target.value);
        if (newValue < min) return;
        max = newValue;
        $('#thumbMax').css('left', calcLeftPosition(newValue) + '%');
        $('#max').html(newValue);
        $('#line').css({
            'left': calcLeftPosition(min) + '%',
            'right': (100 - calcLeftPosition(newValue)) + '%'
        });
    });

    //GRID & LIST
    $(".list-style").on("click", function(){
        $(this).addClass("active").siblings().removeClass("active");

        if($(this).hasClass("grid")){
            $(".all-items-row").removeClass("row-cols-lg-1").addClass("row-cols-lg-3");
            $(".items-card").removeClass("row-cols-lg-2");
            $(".items-card").find(".img-card").removeClass("col-lg-4");
            $(".items-card").find(".card-body").removeClass("col-lg-8");

        } else if ($(this).hasClass("list")){
            $(".all-items-row").removeClass("row-cols-lg-3").addClass("row-cols-lg-1");
            $(".items-card").addClass("row-cols-lg-2");
            $(".items-card").find(".img-card").addClass("col-lg-4");
            $(".items-card").find(".card-body").addClass("col-lg-8");
        }
    });
    
    //PRODUCT COUNT
    let allItems = $(".all-items-row").find(".item-col");
    let count = allItems.length;
    $(".product-count").html(count);

    //PAGE ITEMS NUMBER
    (function($) {
        var pagify = {
            items: {},
            container: null,
            totalPages: 1,
            perPage: 3,
            currentPage: 0,
            createNavigation: function() {
                this.totalPages = Math.ceil(this.items.length / this.perPage);
                //CREATING NAVIGATION
                $('.btn-group', this.container.parent());
                var pagination = $('<div class="btn-group me-2 my-4" role="group" aria-label="First group"></div>');

                for (var i = 0; i < this.totalPages; i++) {
                    var pageElClass = "page";
                    if (!i)
                        pageElClass = "page current";
                    var pageEl = '<button type="button" class="btn btn-outline-secondary page-btn me-3 rounded fw-bold px-2 py-1 border-danger text-danger' + pageElClass + '" data-page="' + (
                    i + 1) + '">' + "0" + (
                    i + 1) + "</button>";
                    pagination.append(pageEl);
                };

                this.container.after(pagination);
    
                var that = this;
                $("body").off("click", ".page-btn");
                this.pageNavigator = $("body").on("click", ".page-btn", function() {
                    var el = $(this);
                    that.goToPage(el.data("page"));
                    
                });
              
                $(".page-btn").on("click", function() {
                    $(window).scrollTop(100); 
                });
            },
            
            goToPage: function(page) {
                this.currentPage = page - 1;
                this.showItems();
            },
            
            showItems: function() {
                this.items.hide();
                var base = this.perPage * this.currentPage;
                this.items.slice(base, base + this.perPage).show();
                this.updateNavigation();
            },

            init: function(container, items, perPage) {
                this.container = container;
                this.currentPage = 0;
                this.totalPages = 1;
                this.perPage = perPage;
                this.items = items;
                this.createNavigation();
                this.showItems();
            }
        };
    
        // stuff it all into a jQuery method!
        $.fn.pagify = function(perPage, itemSelector) {
            var el = $(this);
            var items = $(itemSelector, el);
    
            // default perPage to 5
            if (isNaN(perPage) || perPage === undefined) {
                perPage = 3;
            }
    
            // don't fire if fewer items than perPage
            if (items.length <= perPage) {
                return true;
            }
    
            pagify.init(el, items, perPage);
        };
    })(jQuery);
    
    $(".all-items-row").pagify(15, ".item-col");
    
});