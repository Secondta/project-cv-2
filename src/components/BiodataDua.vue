<template>
<div class="all">
    <div class="all2">
        <legend>RESUME</legend>
        <img src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg" style="border-radius: 100%;">
        <div class="bordernama">
        Secondta <br>
        Ardiansyah <br>
        Wicaksono
        </div>
        <div>
            <span style="font-size: 20px; position: absolute; margin-top: 20px; margin-left: 6cm">SISWA SMK BINA NUSANTARA</span>
            <hr style="margin-left: 6cm; width: 12cm; position: absolute; margin-top: 2cm">
        </div>
        <span  v-for="BiodataDua in BiodataDua" :key="BiodataDua">
        <div class="border1">
            <div class="border2">
                <div class="borderkotak">
                    <span class="judul">💼PENGALAMAN KERJA</span><br>
                    <hr class="dotted">
                    <span>{{ BiodataDua.pengalaman }}</span>
                </div>
                <div class="borderkotak">
                    <span class="judul">PENDIDIKAN</span><br>
                    <hr class="dotted">
                    <span>{{ BiodataDua.pendidikan }} <br> {{ BiodataDua.pendidikan2 }} <br> {{ BiodataDua.pendidikan3 }}</span>
                </div>
                <div class="borderkotak">
                    <span class="judul">KEMAMPUAN</span><br>
                    <hr class="dotted">
                    <div class="katapenting"><b>KEMAMPUAN PROFESIONAL</b><br> <br>
                    <span class="subkatapenting">Microsoft Windows <span style='font-size:15px; margin-left: 30px;'>&#9899;&#9899;&#9899;&#9899;&#9899;</span><span style='font-size:15px;opacity: 0.5;'>&#9899;&#9899;</span></span><br>
                    <span class="subkatapenting">Windows <span style='font-size:15px; margin-left: 84px;'>&#9899;&#9899;&#9899;&#9899;&#9899;</span><span style='font-size:15px;opacity: 0.5;'>&#9899;&#9899;</span></span><br>
                    <span class="subkatapenting">Mac OSX<span style='font-size:15px; margin-left: 84px;'>&#9899;&#9899;&#9899;&#9899;&#9899;</span><span style='font-size:15px;opacity: 0.5;'>&#9899;&#9899;</span></span><br>
                    <span class="subkatapenting">Data Handling<span style='font-size:15px; margin-left: 60px;'>&#9899;&#9899;&#9899;&#9899;&#9899;</span><span style='font-size:15px;opacity: 0.5;'>&#9899;&#9899;</span></span><br>
                    <span class="subkatapenting">Record Keeping<span style='font-size:15px; margin-left: 52px;'>&#9899;&#9899;&#9899;&#9899;&#9899;</span><span style='font-size:15px;opacity: 0.5;'>&#9899;&#9899;</span></span><br>
                    <span class="subkatapenting">Web Skills<span style='font-size:15px; margin-left: 80px;'>&#9899;&#9899;&#9899;&#9899;&#9899;</span><span style='font-size:15px;opacity: 0.5;'>&#9899;&#9899;</span></span>
                    </div>
                </div>
            </div>
        <div class="judul">
            PROFILE
            <hr class="dotted">
            <span class="katapenting"><b>Nama:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.name }}</span><br> <br>
            <span class="katapenting"><b>Hari Ulang Tahun:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.dob }}</span><br> <br>
            <span class="katapenting"><b>Alamat:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.alamat }}</span><br> <br>
            <span class="katapenting"><b>Website:</b></span><br>
            PENGHARGAAN
            <hr class="dotted">
            - <br> <br>
            KONTAK
            <hr class="dotted">
            <span class="katapenting"><b><span style='font-size:25px;'>&#9743;</span>Nomor Rumah:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.hn }}</span><br> 
            <span class="katapenting"><b><span style='font-size:25px;'>✆</span>Nomor HP:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.pn }}</span><br> 
            <span class="katapenting"><b><span style='font-size:25px;'>&#9993;</span>Email:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.email }}</span><br> <br>
            SOCIAL
            <hr class="dotted">
            <span class="katapenting"><b>Twitter:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.twit }}</span><br> 
            <span class="katapenting"><b>Facebook:</b></span><br>
            <span class="subkatapenting">{{ BiodataDua.facebook }}</span><br> 
            <span class="katapenting"><b>Instagram:</b></span><br>
            <span class="subkatapenting"><a href="https://www.instagram.com/vxrll__/">@vxrll__</a></span><br> <br>
        </div>
        </div>
        </span>
    </div>
    </div>
</template>
<script>
export default {
    name: 'BiodataDua',
    computed: {
        //MEMBUAT COMPUTED agenda()
            BiodataDua() {
               //YANG BERISI DATA DARI satte listAgenda 
                return this.$store.state.BiodataDua
            },
    }
}
</script>
<style scoped>
.all {
    margin-top: 1cm;
    margin-left: 8cm;
    margin-right: 9cm;
}
img {
    width: 3cm;
    position: absolute;
    margin-left: 1cm;
    margin-top: 2cm;
}
.bordernama {
    background-color: rgb(45, 43, 105);
    color: white;
    font-size: 25px;
    height: 100px;
    padding-left: 5cm;
    padding-top: 15px;
    width: 13cm;
}
.border1 {
    width: 4cm;
    padding: 25px;
    text-align: right;
    margin-top: 2cm;
    padding-left: 1cm;
    padding-right: 1cm;
    height: 23cm;
}
.judul {
    font-size: 20px;
}
.katapenting {
    font-size: medium;
}
.subkatapenting {
    font-size: small;
}
.dotted {
    border: 1px dotted;
    border-left: white;
    border-right: white;
    border-left: white;
    border-top: white;
}
.borderkotak {
    border: 1px none;
    background-color: #f1f1f1;
    text-align: left;
    margin-top: 10px;
    padding: 30px;
}
.border2 {
    background-color: white;
    position: absolute;
    margin-left: 5cm;
    width: 12cm;
    height: 21cm;
}
legend {
    border: 1px solid none;
    background-color: rgb(45, 43, 105);
    margin-left: 2cm;
    width: 2cm;
    font-size: small;
    text-align: center;
    color: white;
}
</style>