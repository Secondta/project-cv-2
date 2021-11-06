// Management State
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        CvSatu: [
            { nama: 'Secondta Ardiansyah Wicaksono', 
            alamat: 'Belajar Vuejs',
            phone: '+62 812 26386174',
            email: 'idnssquad89@gmail.com',
            hobi: 'Programming',
            ringkasan: 'Siswa SMK Bina Nusantara yang sedang mengikuti Bootcamp Programmer. Kediamannya berada di Jalan Dewisartika NO 32 RT1 RW4',
            skill: 'Bermain Mobile Game',
            sertifikat: 'Programming languages: HTML, JavaScript, CSS',
            }
        ],
        BiodataDua: [
        {
            name: 'Secondta Ardiansyah Wicaksono',
            dob: '25 January 2007',
            alamat: 'Jalan Dewisartika NO 32',
            web: '-',
            hn: '-',
            pn: '+62 812 26386174',
            email: 'idnssquad89@gmail.com',
            pengalaman: '-',
            twit: '-',
            facebook: '-',
            pendidikan: 'SD',
            pendidikan2: 'SMP',
            pendidikan3: 'SMK'
        }
    ]
    }
})