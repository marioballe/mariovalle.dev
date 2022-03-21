import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faDiscord,
  faTwitch,
  faSpotify,
  faYoutube,
  faInstagram,
  faBilibili,
} from "@fortawesome/free-brands-svg-icons";

import FontAwesomeIcon from "@/libs/FontAwesomeIcon.vue";

library.add(
  fas,
  faTwitter,
  faLinkedin,
  faGithub,
  faDiscord,
  faTwitch,
  faSpotify,
  faYoutube,
  faInstagram,
  faBilibili
);

export { FontAwesomeIcon };
