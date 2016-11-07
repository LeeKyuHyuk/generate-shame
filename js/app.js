$(document).ready(function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    
    $("#start").click(function() {
        var title = $("#title").val();
        var subtitle = $("#subtitle").val();
        var image = document.querySelector('#image');

        if (title.length == 0 || subtitle.length == 0) return alert("내용을 모두 입력해주세요.")

        var fileList = image.files;
        var reader = new FileReader();
        reader.readAsDataURL(fileList[0]);

        var input = loadImage(URL.createObjectURL(fileList[0]), main);
        var form = loadImage('http://kyuhyuk.kr/generate-shame/images/form.png', main);
        var blur = loadImage('http://kyuhyuk.kr/generate-shame/images/blur.jpg', main);
        canvas.style.display = "block";
        document.getElementById("download").style.display = "block";
        alert("자괴감이 생성되었습니다!\n스크롤을 아래로 내려보세요.")

        function main() {
            context.drawImage(blur, 0, 0);
            context.drawImage(input, canvas.width / 2 - input.width / 2, canvas.height / 2 - input.height / 2);
            context.drawImage(form, 0, 0);
            context.font = "bold 24px arial";
            context.fillStyle = 'black';
            context.textAlign = 'center';
            context.fillText(subtitle, 195, 110);
            context.font = "bold 55px arial";
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.fillText("\"" + title + "\"", 700, 610);
            context.font = "bold 20px arial";
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.fillText("판사님 고양이가 만들었습니다.", 370, 705);
        }

        function loadImage(src, onload) {
            var img = new Image();
            img.onload = onload;
            img.src = src;
            return img;
        }
    })

    $("#download").click(function() {
        window.location = canvas.toDataURL();
    })
});
