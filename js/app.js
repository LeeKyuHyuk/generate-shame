$(document).ready(function() {
    $("#start").click(function() {
        var title = $("#title").val();
        var subtitle = $("#subtitle").val();
        var image = document.querySelector('#image');
        var canvasImg = document.getElementById("canvasImg");

        if (title.length == 0 || subtitle.length == 0) return alert("내용을 모두 입력해주세요.")

        var fileList = image.files;
        var reader = new FileReader();
        reader.readAsDataURL(fileList[0]);

        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        var input = loadImage(URL.createObjectURL(fileList[0]), main);
        var form = loadImage('images/form.png', main);
        var blur = loadImage('images/blur.jpg', main);
        alert("자괴감이 생성되었습니다!\n스크롤을 아래로 내려보세요.");
        canvasImg.style.display = "block";


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

            var dataURL = canvas.toDataURL("image/jpeg");
            canvasImg.src = dataURL;
        }

        function loadImage(src, onload) {
            var img = new Image();
            img.onload = onload;
            img.src = src;
            return img;
        }
    })
});
