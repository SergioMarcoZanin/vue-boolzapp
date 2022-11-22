"use strict"
const {createApp}=Vue;
createApp({
    data(){
        return{
            activeContact:-1,
            newMessage:"",
            searchInput:"",
            chuck:"",
            changeNameVisible :true,
            changeInfoVisible : true,
            userName:"Sergio Marco",
            userInfo:"...",
            dNone:"",
            inputNotFocussed:true,
            deleted:false,
            unreadContacts:[
                [],
                [],
                [],
                [],
                [],
                [],
                [],
                [],
            ],
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '10/07/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '10/06/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '10/07/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '10/08/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
        }
    },
    methods:{
        changeActiveContact(i){
            this.activeContact=i;
            document.getElementById(i).classList.add("d-none");
            this.unreadContacts[i].splice(0);
        },
        searchContact(){
            this.contacts.forEach(contact => {
                if(this.searchInput.length===0){
                    contact.visible=true;
                }else if(contact.name.toUpperCase().includes(this.searchInput.toUpperCase())){
                    contact.visible=true;
                }else{
                    contact.visible=false;
                }
            });
        },   
        getDate(date){
            return moment(date).fromNow();
        },
        deleteMessage(i){
            this.contacts[this.activeContact].messages.splice(i,1);
            console.log(this.contacts[this.activeContact].messages)
        },
        getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min) ) + min;
        },
        overwriteName(){
            if(this.changeNameVisible===true){
                this.changeNameVisible=false;
                document.querySelector(".user-name").classList.add("border-bottom-green");
            }else{
                this.changeNameVisible=true;
                document.querySelector(".user-name").classList.remove("border-bottom-green");
            }
        },
        overwriteInfo(){
            if(this.changeInfoVisible===true){
                this.changeInfoVisible=false;
                document.querySelector(".user-info").classList.add("border-bottom-green");
            }else{
                this.changeInfoVisible=true;
                document.querySelector(".user-info").classList.remove("border-bottom-green");
            }
        },
        hideNotification(){
            this.dNone="d-none";
        },
        showArrow(){
            this.inputNotFocussed=false;
        },
        closeSearch(){
            this.searchInput="";
            this.inputNotFocussed=true;
        },
        autoScroll(){
            if(this.activeContact>=0){
                const messages=document.querySelector(".messages");
                let scrollHeight=messages.scrollHeight;
                messages.scrollTop=scrollHeight;
            }
        }
    },
}).mount("#app");