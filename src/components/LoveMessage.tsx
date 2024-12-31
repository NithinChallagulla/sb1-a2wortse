import React from 'react';
import { Heart } from 'lucide-react';
import { photos } from '../constants/photos';

export const LoveMessage: React.FC = () => {
  return (
    <div className="relative p-8 my-12 mx-auto max-w-2xl text-center">
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url(${photos[0].url})`,
          backgroundSize: '200px',
          filter: 'grayscale(100%)'
        }}
      />
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <Heart
          className="w-8 h-8 text-red-500 animate-pulse"
          fill="currentColor"
        />
      </div>
      <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-serif mb-6 text-gray-800">My Dearest</h2>
        <p className="text-lg text-gray-700 leading-relaxed italic">
        
Hi Ammuluuu
Ivaaltitho correct ga 1 year avtundhi nee oosu thelisi
Asalu ela parichayam ayyavo kooda thelidhu,sudden ga naa life loki vachaav
vachi vidathiyyaleni bond chesaav.
nuv chaala manchi dhaanivi bujjamma,manchi means like u r a kind hearted person.
u care for a person with all ur heart and valla gurinchi correct decisions theesukuntaav.
ika naa vishayam lo oka varam nuv.IOT baasha lo cheppaali ante u clicked the RESET button on my brain.
Naa thinking style ne maarchesaav.u truly care for me without thinking if it will affect you or not.
and by the way ee paatiki already aa bag lo emunnaayo choose untaav kadha.
hmmmmmmm
pandi indhaakati dhaaka kopam ga unnav kadha veediki nenu ante importance ledu ani.
haha
actually neeku nenu bangles konipettaali ani eppati nuncho aasa.
but ila nuvve adigaav ninna jhumka lu kavaali ani.
so lag cheyyakunda ninna intiki vachaaka ventane bayataki vellipoya pani undi ani,heeeee.
ventane naa manasuki nachinavi theesukuni vachesaa nuv malli ekkada msg chesthaavo ani.
avi naaku nachay anthe.i can understand if you don't like them.
eesaari neeku nachinavi konta.chorry 
hmmmmmmmmmmm
nuv appudappudu antaav kadha vadhilesthaava ra nannu ani, aa doubt raanivaddu bujjamma,ee kanna nee vaadu.nuv pommante thappa podu.
Naa lifelong dream ayina Drones ki sambandinchia startup lo naaku opportunity vachi employee ga chesthunna sare kevalam ninnu oka maata annaaru ani thappu evardhi ani choodakunda godavaki vellipoya.till this day Siddharth is angry on me.alaantidhi naa prema nee meedha.naa prename nuvvu.
naaku love ni express cheyyadam thelidhu harshini.thelisinattu chesthunna but nerchukuntunna ee Madhya.hope you understand.
and cheppadam marchipoya ee Madhya nenu limits cross chesi touch chesthunna. i can feel your uncomfortableness.sorry if i overdid anything.
monnati dhaaka even though we mutually proposed i have felt a inferior feeling and tried to make you leave me because first thing- maa parents naaku memu untunna illu thappa vere aasthulu ivvaleru(ivvadaaniki levu actually) so dheeni batti u can understand , i am on a very low level compared to you.and ika job chesi earn cheyyadam antaava?naa lanti skill leni vaadiki job nene ivvanu.
but ee Madhya aa feeling maarindhi, ee startup emanna click ayithey konchem temporary liquid create ayithe i can increase the money ane feeling lo unna,
if not edhoka training theesukuni job earn chestha
ninnu maathram vadhalanu
gurthupettuko
love you bangaaram
anni baagunte ee decade ayyelopu mana pelli ayipoddi happy ga
vadhileyyavu kadha nannu ammuluuu
I love you soo much ra
Happy New Year ammuluu  [Your message will go here]
        </p>
        <div className="mt-6 text-sm text-gray-500">With all my love ❤️</div>
      </div>
    </div>
  );
};
