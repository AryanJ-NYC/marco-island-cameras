const cameras = [
  'https://g1.ipcamlive.com/player/player.php?alias=5ba930ae67f98',
  'https://g1.ipcamlive.com/player/player.php?alias=660c40a0b4795&skin=white&mute=1&disableautofullscreen=1&disablezoombutton=1&disableframecapture=1&disablestorageplayer=1&disabledownloadbutton=1&disablenavigation=1',
  'https://g1.ipcamlive.com/player/player.php?alias=660c414ce4002&mute=1&disableautofullscreen=1&disablezoombutton=1&disableframecapture=1&disablestorageplayer=1&disabledownloadbutton=1&disablenavigation=1',
  'https://g1.ipcamlive.com/player/player.php?alias=660c4193a8024&skin=white&mute=1&disableautofullscreen=1&disablezoombutton=1&disableframecapture=1&disablestorageplayer=1&disabledownloadbutton=1&disablenavigation=1',
  'https://share.earthcam.net/tJ90CoLmq7TzrY396Yd88JZMJ0XOHwMOVmBMXU7IxC4!/jw_marriott_marco_island/camera/live',
  'https://ipcamlive.com/player/player.php?alias=saleepepe&autoplay=1&wmode=transparenartt',
];
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        {cameras.map((camera) => (
          <div key={camera} className="aspect-video w-full">
            <iframe src={camera} className="w-full h-full border-0" allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </main>
  );
}
