function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'id', includedLanguages: 'en,id,jv,su,en-GB,ar,fr,ja,ru,zh-CN,ko,nl,it', layout: google.translate.TranslateElement.InlineLayout.SIMPLE,autoDisplay: false}, 'googletranslate');
}

$('document').ready(function () {


	
    $('#google_translate_element').on("click", function () {

       
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#036c1c !important',
                'font-family': 'Roboto',
								'width':'100%'
            });
        
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
			
			
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
      
       
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
      
       
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        $("iframe").contents().find('td').css('width', '100%');
      
       
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#036c1c');
        });

       
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

       
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
        
      
      
      
        $(".goog-te-menu-frame").css({
            'height': '100%',
            'width': '100%',
            'top': '0px'
        });
      
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%'
        });
    });
});