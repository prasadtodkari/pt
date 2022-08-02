
function imggal(){
let imgsrc = ["https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=", 
            "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?s=612x612",
            "https://media.istockphoto.com/photos/fantastic-morning-view-of-plitvice-national-park-colorful-spring-of-picture-id1294247745?k=20&m=1294247745&s=612x612&w=0&h=vnMgXlQgXr-U8BP5U7IgAuC4Rp1EqJaRi7_4SHGjrpQ=",
            "https://media.istockphoto.com/photos/landscape-of-plitvice-lakes-national-park-or-nacionalni-park-jezera-picture-id1291643667?k=20&m=1291643667&s=612x612&w=0&h=2jZ7_RtEmdQ0KFv8_zT_ytnvf2_p39TU8Cb-yrO4sIc=",
            "https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177?s=612x612",
            "https://media.istockphoto.com/photos/beautiful-young-woman-blows-dandelion-in-a-wheat-field-in-the-summer-picture-id1203963917?k=20&m=1203963917&s=612x612&w=0&h=hyEr10yKIL5KcoRhK0IVr3t-hqpmmNSwflvm-SIJE8A=",
            "https://media.istockphoto.com/photos/touch-of-fresh-moss-in-the-forest-picture-id1283852667?k=20&m=1283852667&s=612x612&w=0&h=wyNSSk3yPxdwSnRv-Orr4ar5xS9FrhXIVsgw37TIbj4=",
            "https://media.istockphoto.com/photos/areuse-river-in-the-neuchtel-jura-switzerland-panorama-picture-id1130739032?k=20&m=1130739032&s=612x612&w=0&h=dnYbdFBxb4WBuHwH5_nGwdc57QMo-LTwg5vJYUYTnik=",
            "https://media.istockphoto.com/photos/happy-family-mother-father-children-son-and-daughter-runing-and-on-picture-id1206622213?k=20&m=1206622213&s=612x612&w=0&h=1N-4TkqogW5pGuJKqduyIcigxJ4tp2osGiKatfnbOLc=",
            "https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?k=20&m=944812540&s=612x612&w=0&h=U3sC5L6ZJY2oHC33eixu4CcB15JsgKl0Wnhtcpf_p40=",
            "https://media.istockphoto.com/photos/woman-in-rustic-dress-gathering-poppy-and-wildflowers-in-sunset-light-picture-id1209220375?k=20&m=1209220375&s=612x612&w=0&h=OE2G6iDm3dh3C-KOS3y2bRIgZ93qpaKBU9OlwIuaFY8=",
            "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=", 
            "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?s=612x612",
            "https://media.istockphoto.com/photos/fantastic-morning-view-of-plitvice-national-park-colorful-spring-of-picture-id1294247745?k=20&m=1294247745&s=612x612&w=0&h=vnMgXlQgXr-U8BP5U7IgAuC4Rp1EqJaRi7_4SHGjrpQ=",
            "https://media.istockphoto.com/photos/landscape-of-plitvice-lakes-national-park-or-nacionalni-park-jezera-picture-id1291643667?k=20&m=1291643667&s=612x612&w=0&h=2jZ7_RtEmdQ0KFv8_zT_ytnvf2_p39TU8Cb-yrO4sIc=",
            "https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177?s=612x612",
            "https://media.istockphoto.com/photos/beautiful-young-woman-blows-dandelion-in-a-wheat-field-in-the-summer-picture-id1203963917?k=20&m=1203963917&s=612x612&w=0&h=hyEr10yKIL5KcoRhK0IVr3t-hqpmmNSwflvm-SIJE8A=",
            "https://media.istockphoto.com/photos/touch-of-fresh-moss-in-the-forest-picture-id1283852667?k=20&m=1283852667&s=612x612&w=0&h=wyNSSk3yPxdwSnRv-Orr4ar5xS9FrhXIVsgw37TIbj4=",
            "https://media.istockphoto.com/photos/areuse-river-in-the-neuchtel-jura-switzerland-panorama-picture-id1130739032?k=20&m=1130739032&s=612x612&w=0&h=dnYbdFBxb4WBuHwH5_nGwdc57QMo-LTwg5vJYUYTnik=",
            "https://media.istockphoto.com/photos/happy-family-mother-father-children-son-and-daughter-runing-and-on-picture-id1206622213?k=20&m=1206622213&s=612x612&w=0&h=1N-4TkqogW5pGuJKqduyIcigxJ4tp2osGiKatfnbOLc=",
            "https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?k=20&m=944812540&s=612x612&w=0&h=U3sC5L6ZJY2oHC33eixu4CcB15JsgKl0Wnhtcpf_p40=",
            "https://media.istockphoto.com/photos/woman-in-rustic-dress-gathering-poppy-and-wildflowers-in-sunset-light-picture-id1209220375?k=20&m=1209220375&s=612x612&w=0&h=OE2G6iDm3dh3C-KOS3y2bRIgZ93qpaKBU9OlwIuaFY8=",
            "https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=", 
            "https://media.istockphoto.com/photos/picturesque-morning-in-plitvice-national-park-colorful-spring-scene-picture-id1093110112?s=612x612",
            "https://media.istockphoto.com/photos/fantastic-morning-view-of-plitvice-national-park-colorful-spring-of-picture-id1294247745?k=20&m=1294247745&s=612x612&w=0&h=vnMgXlQgXr-U8BP5U7IgAuC4Rp1EqJaRi7_4SHGjrpQ=",
            "https://media.istockphoto.com/photos/landscape-of-plitvice-lakes-national-park-or-nacionalni-park-jezera-picture-id1291643667?k=20&m=1291643667&s=612x612&w=0&h=2jZ7_RtEmdQ0KFv8_zT_ytnvf2_p39TU8Cb-yrO4sIc=",
            "https://media.istockphoto.com/photos/sunset-with-pebbles-on-beach-in-nice-france-picture-id1157205177?s=612x612",
            "https://media.istockphoto.com/photos/beautiful-young-woman-blows-dandelion-in-a-wheat-field-in-the-summer-picture-id1203963917?k=20&m=1203963917&s=612x612&w=0&h=hyEr10yKIL5KcoRhK0IVr3t-hqpmmNSwflvm-SIJE8A=",
            "https://media.istockphoto.com/photos/touch-of-fresh-moss-in-the-forest-picture-id1283852667?k=20&m=1283852667&s=612x612&w=0&h=wyNSSk3yPxdwSnRv-Orr4ar5xS9FrhXIVsgw37TIbj4=",
            "https://media.istockphoto.com/photos/areuse-river-in-the-neuchtel-jura-switzerland-panorama-picture-id1130739032?k=20&m=1130739032&s=612x612&w=0&h=dnYbdFBxb4WBuHwH5_nGwdc57QMo-LTwg5vJYUYTnik=",
            "https://media.istockphoto.com/photos/happy-family-mother-father-children-son-and-daughter-runing-and-on-picture-id1206622213?k=20&m=1206622213&s=612x612&w=0&h=1N-4TkqogW5pGuJKqduyIcigxJ4tp2osGiKatfnbOLc=",
            "https://media.istockphoto.com/photos/mountain-landscape-ponta-delgada-island-azores-picture-id944812540?k=20&m=944812540&s=612x612&w=0&h=U3sC5L6ZJY2oHC33eixu4CcB15JsgKl0Wnhtcpf_p40=",
        
        ];
        /* array closed */
        console.log(imgsrc.length);
    /* Loop to add Images in Html Div */
    for(i = 1; i < imgsrc.length; i++){
        let l = document.createElement("img");

        l.src = imgsrc[i];
        console.log(l.src); // to check the path
        let d = document.getElementById("gal");
        d.appendChild(l);
     }
    }
