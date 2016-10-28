/**
 * Admin Login
 */
(function(D) {
    var checkCard = function(){
        var ca = {
            'a':['423','231','239','396','571','814','306','843','848'],
            'b':['781','124','447','561','580','238','320','860','445'],
            'c':['720','689','791','235','991','140','154','997','973'],
            'd':['117','689','658','528','741','331','445','551','940'],
            'e':['737','139','798','753','606','470','604','748','393'],
            'f':['498','462','266','135','911','372','919','979','443'],
            'g':['363','792','538','754','468','950','287','478','375'],
            'h':['319','755','125','379','255','691','597','505','343'],
            'i':['170','602','567','179','797','612','272','321','182']
        },
        p = D.querySelectorAll('.identifying-cont span'),
        c1 = p[0].innerHTML,
        c2 = p[1].innerHTML;
        D.querySelectorAll('#i-box')[0].value = ca[c1[0]][c1[1]] + ca[c2[0]][c2[1]];
        D.querySelectorAll('#J_identifyingCode-btn')[0].click();
    };

    var checkUser = function() {
        $.post(
            '/home/login',
            {username: '管理员', password: 'zxc123', type: 'check_user'},
            function (msg) {
                if (msg.success) {
                    location.href = '/home/login_success/';
                }
            },
            'json'
        )
    }
    if (location.href.indexOf('login_success') >= 0) {
        checkCard()
    } else {
        checkUser()
    }
})(document)
