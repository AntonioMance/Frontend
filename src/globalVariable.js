import { reactive } from 'vue';


export const globalVariable = reactive({
    roomNumber: JSON.parse(localStorage.getItem('roomNumber') || "{}"),
    roomName: JSON.parse(localStorage.getItem('roomName') || "{}"),

    setRoomNumber(number) {
        this.roomNumber = number;
        localStorage.setItem("roomNumber", JSON.stringify(this.roomNumber));
    },

    setRoomName(name) {
        this.roomName = name;
        localStorage.setItem("roomName", JSON.stringify(this.roomName));
    }

});