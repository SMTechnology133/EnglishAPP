//modal code
$(document).ready(function() 
{ 
$("#myModal").modal('show'); 
}); 

$(document).ready(function(){
$("h5").animate({
color: "teal"
});
});

$(document).ready (function(){
$("img").attr("loading", "lazy");
});

//code to confirm or cancel a download
let downloadLink = '';

  function confirmDownload(event, element) {
    event.preventDefault(); // Stop default action
    downloadLink = element.href;

    const fileName = element.href.split('/').pop();
    const fileSize = element.getAttribute('data-size') || 'Unknown size';

    document.getElementById('confirmMessage').textContent =
      `Download "${fileName}" (${fileSize})?`;

    document.getElementById('overlay').style.display = 'block';
    document.getElementById('confirmBox').style.display = 'block';
  }

  document.getElementById('yesBtn').onclick = function() {
    window.location.href = downloadLink;
    closeConfirmBox();
  };

  document.getElementById('noBtn').onclick = function() {
    closeConfirmBox();
  };

  function closeConfirmBox() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('confirmBox').style.display = 'none';
    downloadLink = '';
  }
//end code to confirm or cancel a download

 //code to show update time
  // Set the post time (you can customize this)
  const postTime = new Date('2025-06-01T14:00:00'); // Example date

  function timeAgo(time) {
    const now = new Date();
    const seconds = Math.floor((now - time) / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours   = Math.floor(minutes / 60);
    const days    = Math.floor(hours / 24);
    const months  = Math.floor(days / 30);
    const years   = Math.floor(days / 365);

    if (seconds < 60)
      return `Updated ${seconds} second${seconds !== 1 ? 's' : ''} ago`;
    else if (minutes < 60)
      return `Updated ${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    else if (hours < 24)
      return `Updated ${hours} hour${hours !== 1 ? 's' : ''} ago`;
    else if (days < 30)
      return `Updated ${days} day${days !== 1 ? 's' : ''} ago`;
    else if (days < 365)
      return `Updated ${months} month${months !== 1 ? 's' : ''} ago`;
    else
      return `Updated ${years} year${years !== 1 ? 's' : ''} ago`;
  }

  function updateTimestamp() {
    document.getElementById('timestamp').textContent = timeAgo(postTime);
  }

  updateTimestamp(); // Initial call
  setInterval(updateTimestamp, 30000); // Update every 30 seconds
//end code to show update time

//speech module profiler component 
//speech 0
function profiler0() {
  // Create a SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance("This user interface component is easy to use, created mobile phone first you can edit and run it on your smart phone, alternatively with a little knowledge you can deploy your work on the Internet. You does not need any programming knowledge to use this component, by logically following the instructions provided in this documentation,  you can almost  create profiles on any subject of your interest, from prominent people, celebrities in all fields to animals and plants, it can serve as a classification system of some sort. The component is for purpose of learning web programming,  it is free you can change it, modify it or share it, in accordance  with terms of service. For more details view the documentation file .");
  // Select a voice
  const voices = speechSynthesis.getVoices();
  utterance.voice = voices[0]; // Choose a specific voice
  // Speak the text
  speechSynthesis.speak(utterance);
}
//end of speech 0