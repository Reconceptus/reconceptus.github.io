const search = function() {
    let searchInput = $('#search').find('input'),
        resetBtn = $('#search').find('button[type=reset]');

    function inputCheck(addr){
        if(addr.val().trim() != ''){
            $('#search').addClass('filled')
        }
        else{$('#search').removeClass('filled')}
    }

    inputCheck(searchInput);

    searchInput.change(function(){
        inputCheck(searchInput);
    });

    resetBtn.click(function () {
        $('#search').removeClass('filled')
    })

};

module.exports = search;
