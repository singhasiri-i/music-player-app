const song = document.getElementById("song")
const songProgress = document.getElementById("songProgress")
const playBtn = document.getElementById("playBtn")
const pauseBtn = document.getElementById("pauseBtn")

playBtn.style.display = "none" // ซ่อนปุ่ม pause ไว้ก่อน

playBtn.onclick = () => { // ถ้าคลิกปุ่ม play
    song.play()                         // ให้เพลงเล่น
    playBtn.style.display = "none"      // ซ่อนปุ่ม play ไว้ก่อน
    pauseBtn.style.display = ""         // แสดงปุ่ม pause ขึ้นมาแทน
}

pauseBtn.onclick = () => { // ถ้าคลิกปุ่ม pause
    song.pause()                        // ให้เพลงหยุด
    pauseBtn.style.display = "none"     // ซ่อนปุ่ม pause ไว้ก่อน
    playBtn.style.display = ""          // แสดงปุ่ม play แทน
}
// setInterval(() => {
//     console.log("Current Time: ",song.currentTime);
//     console.log("Duration: ",song.duration);
// }, 1000);
song.onloadedmetadata = () => {
    songProgress.max = song.duration
    songProgress.value = song.currentTime
}

if(song.play()) {
    setInterval(() => {
        songProgress.value = song.currentTime
        // ถ้าเพลงเล่นอยู่ ตอน current time มันเลื่อนไปเรื่อยๆ ให้ value ของ progress bar = current time ของ song 
        // แต่ตอนนี้เวลาเลื่อนจุดใน progress เพลงยังไม่เลื่อนตาม เพราะใน onloadedmetadata ตัว 
        // songProgress.value = song.currentTime ดังนั้น current time ของ song อยู่ที่ไหน bar value ก็จะอยู่ตรงนั้น
    }, 500) // ให้ value ของ progress bar = current time ของ song ทุกๆ ครึ่งวิ
}

songProgress.onchange = () => {
    // ดังนั้นต้อง set เพิ่มคือถ้า bar เปลี่ยนแปลง ให้ current time มีค่าเท่ากับ bar value
    song.currentTime = songProgress.value
}
