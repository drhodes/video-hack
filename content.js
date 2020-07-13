// video hack.

// 
// The entire 6.002x playlist
// https://www.youtube.com/playlist?list=PL_onPhFCkVQgEZeKD2Ghxw6MWYPYL-arq
//

function log(msg) {
    console.log("6.002> " + msg);
}

log("video hack extension loaded");

let video_table = {
    // "not-working id" -> "working id"
    "0iQkPm8rwDA": "lRNVqr--DGM",
    "eLGa_Wo6JxA": "Q7VVM5uEnVI",
    "X-68e0Ei7PI": "txnL7-NOr5U",
    "QNg4OEvaq2E": "ymY1IldQwmw",
    "2s9z1zLOAJY": "IJaEP06Qk1I",
    "Oy6SWLhQ93U": "4GQp1VO2E6w",
    "QT7MbAQzuXc": "aXOU7Gn6Noc",
    "Dn15yA2e5LU": "i9OPi6o3-I4",
    "YMHdPnSknOI": "gP7C_N4sFg0",
    "AOd9r70gtr0": "tLG0q9tN0Qk",
    "9RNLqOV3nTU": "28fI01DDOOA",
    "wJHeTVL7cgQ": "QfQcX6Gxlsg",
    "KhYtUbLlmfA": "tJaYygU4-sM",
    "SvgakMnWfL0": "Ayv6lLUDGJU",
    "MIYHeZubhCA": "ybQLYi7J9mk",
    "AQfYNn3ltbI": "dfOgGeY6JGc",
    "2szjZQrVPcA": "ZWcUNPyK2TM",
    "h5un9eTgQbU": "VXiVNpo3fgo",
    "72ktk_Q-L4k": "zG7ZrP4hXz4",
    "HRDQP59ZSw8": "lOLeXP1Tjrc",
    "2bx4AcaFuZE": "6DD4tAlzsII",
    "yZYbPDvhrgY": "yh8IMCzlE08",
    "rqIzc_8mwC0": "ZhMiWBaqFb0",
    "o2pLltkrhGM": "bSDmv3_n32Y",
    "6SKuj9DL57A": "07mjRg1XOg4",
    "TbZs6MV-cM4": "JmGQow9qZzE",
    "D7XCZlqBPU0": "5_0nhpn3ddE",
    "RorXnZl5kYQ": "W1yYxUb89Tg",
    "HaCCN9l_lxk": "pb0m_1sMEf8",
    "iO-TFdSwsq4": "YDg_U4zBsDg",
    "HKBIMLzuuBg": "piX3gQ2Z30I",
    "Ifu1Ud-lk08": "AiLyaxPDaPM",
    "Id8zWCeKFAg": "6JTj7LXKw38",
    "0f96IDJyV0w": "PfY88Ntcw1w",
    "Dr52vjOHCEk": "tpgdjGXa_zI",
    "HHy3-8bfldY": "EYp3Pc5PbDU",
    "lf80RAv9meE": "cK-jVbxvKLU",
    "gntWSKPBkOk": "pVM1lKFYMzE",
    "0ZeuYSMdHJI": "wzdQywtHD4k",
    "qs0RJz5mmYg": "Oewa1QOPkTo",
    "JZtoX5DH4T0": "RLcyZK2p1-U",
    "ma0f56zkRGI": "zVi2VGXtd1U",
    "-RNnPC6fmjY": "W4-jJtA5wC4",
    "Jl09eulUf0Q": "1BYXFQ3mXHk",
    "N6Ly6_tFy4I": "JLeVpx8Ks04",
    "d9YCPd6nZSQ": "hcgsf7maQ5U",
    "es8TOiaouSw": "dck7OO7oZZ8",
    "N3jXyuAz5Dg": "lyO5hHQanUU",
    "LOOsbsBLT7M": "UEq8vEggZNY",
    "Sef9PgMlTS4": "TGP2vfieB-8",
    "oV_GKiW7I4k": "VvS0knaixU0",
    "_uxoI3ejIi8": "A_hTaMhdaZs",
    "GBzPJYfNfUQ": "sdz7gNe03p0",
    "-qWf9afcBcw": "z8_XiWAvFRI",
    "tlJ5r-fVSpA": "zyhqKNQ7_oo",
    "MqFWW78C5JI": "dSiy0aYgm9A",
    "shjp5pkFhQs": "GRZ0q4DnRn4",
    "FS7VH9i14RU": "tyMxY_5l2eg",
    "mHvf1lfRoj0": "g9kCH1WaJNg",
    "_t8T4QpzDxk": "8_RV4YdL6iw",
    "l9SBQ_OAXpI": "6TxxJW78ab0",
    "FLVUXzXfblQ": "QuHuGrkdbgU",
    "NC_dxHZwREU": "3ZMci0KGxVo",
    "Gdl9iu5O1NE": "RMHnZIcLnpo",
    "Eu_e11FcCq4": "ILQHYT_Ibrg",
    "7_GjgHt4zkM": "jjargr1OqAk",
    "9vogoLiO2jM": "77rUrZjUses",
    "gZ6D6XfuJXA": "uVLvyxVJjtY",
    "aNBsTCVau6s": "Zxqh4uvbFXM",
    "jlX8hpZvnUQ": "zKm3J3eAre4",
    "jiSZUxAIWNk": "Nk9suWjmls8",
    "4XNg0nsg1Tg": "uEh4FoDUo8k",
    "DJafcK9z2uc": "ZJEGwnos7o4",
    "DZPdezZATvk": "takrussSdhE",
    "Z5b1oBBtvyA": "kq373W157sw",
    "5uKqMpQqNtk": "YOzKoMzm2dw",
    "7g7jzGnqffE": "TuHH7hziz_I",
    "SRSYiAuesj8": "J1h4xiLnQbs",
    "jdn9hXyviCE": "CbiEQwBWC1A",
    "ES4VVGjf13U": "NAp2cKUT8Nk",
    "qxXZuPKCEXk": "FSkJ1DajGWI",
    "gK9ooBfAuEc": "qnhJtoCpS4U",
    "ZgWmK7vjOLo": "QVuuyuwAdWM",
    "w0BgSQZCnLM": "vQWbi6rorOc",
    "ACwDG8aZOpI": "aorFE5ojAiM",
    "m5-b1I_lhLU": "_zR_RWatho8",
    "URDBeyXg7oA": "T2sDGIKQJ80",
    "HSqbzBmd3Lw": "-rkh4JU4jL4",
    "08kTr0928uI": "Esrldiv5IeE",
    "Db26EK3jdIw": "lV69Z5LVMh8",
    "v0nKHp2ELs0": "Hk2K5zUcrAE",
    "9oGx4uGvWZA": "puu8I2azvQ8",
    "CLxINF65Bi8": "Md-vLhog-ug",
    "XQOD0J-5vf8": "B40snYwJUXQ",
    "tYuwhk0rleU": "kKI5fX_vyNI",
    "ou7LgMGBmkQ": "Mwt2eg0r1Ng",
    "MVDH7sF8zdQ": "FT846xLuHIM",
    "mbgjCcg0o6o": "yC57ihkg3yA",
    "2XgRwsPxhKM": "rb-85PChqh0",
    "BjAjB-EIezY": "60vzws37eRg",
    "dzO5BqZ_en4": "k1veAXTLZlE",
    "xV-3Bv70riQ": "I5gmmRbPt74",
    "FKS0RxHv-ho": "IZx7ZY-jNpI",
    "IA4BYPyMP7o": "-3GStZkzk8E",
    "pEvdYkTfJcI": "2PbAET-E2YA",
    "6jQf3f8tip8": "fJLul8ycrs0",
    "6UURLn3-LWw": "Js8tV66_qR8",
    "3IpzOz0OAis": "U4Sw9-wrrX8",
    "3g5gEoUGD4w": "b3mM-4nxQmY",
    "pm_2sV1tIS8": "CqxxQHM5-Ss",
    "R6p-exei1yQ": "G8pxnaBLLPI",
    "qehrY5JUkbQ": "8m1yyI0lLUc",
    "Pcofm5pfJf8": "PlUD49sM0Jw",
    "VyRijfXTAtc": "36E_Ltpnuhg",
    "3fQRhKuSGsE": "p5lABjD_HxY",
    "he_UAl7owSQ": "Y6ga6dixHbM",
    "he_UAl7owSQ": "6IxZixMgXVU",
    "htk6E6nAsj8": "-elmpPYqGzY",
    "q047qI7_Qcg": "3QBL5TKwFHk",
    "dnUDhavprO8": "-Hqt0Ahj5Gs",
    "AHA-1Odq9us": "apOQVYcaQc8",
    "r2mabHxQZ34": "Hkzg0Yj3Pbo",
    "_S14wuKRhFQ": "vbDffSXkVtE",
    "sPrAGCitiEw": "R42vYJpMiGg",
    "LQmOCFwCw3s": "K23PViorXBU",
    "rQqvUqvVdzk": "hnA51lLZvXI",
    "M6zrANNaY9Q": "SIRrGtUoVrM",
    "0CFJ2p3VQpk": "C7hEh2xgim0",
    "oTsdePe8tHE": "lWZegW5ADDA",
};

function get_good_id(bad_id) {
    let good_id = video_table[bad_id];
    if (good_id) {
        return good_id;
    } else {
        //log("couldn't swap video, id not found: " + bad_id);
        return false;
    }
}

function extract_youtube_id(url) {
    const pattern = /([a-zA-Z0-9_-]{11})\?/;
    let found = url.match(pattern);
    if (found) {
        return found[1];
    } else {
        //log(["failed to find youtube video id in url", url]);
        return false;
    }
}

// this function runs every second. It has to for now because clicking
// an edx unit tab doesn't reload the page, and that's how this code
// runs.  A better way to do this would probably be to add a callback
// to the tab click. In any case, running this code every second is
// not a big deal.
function replaceVid() {
    setTimeout(function() {    
        //log(["attempting to replace youtube video, try#", numtries]);
        var player = document.getElementsByClassName("video-player");
        if (player.length > 0) {
            var url = player[0].children[0].getAttribute("src");
            let bad_id = extract_youtube_id(url);
            let good_id = get_good_id(bad_id);
            
            if (good_id) {
                log("replace youtube video:" + bad_id + ", with: " + good_id);
                url = url.replace(bad_id, good_id);
                player[0].children[0].setAttribute("src", url);
            }
        }
        replaceVid();        
    }, 1000);    
}
replaceVid();


    
