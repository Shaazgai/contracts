import About from "@/components/sections/home/about";
import PublicLayout from "@/layouts/public-layout";
import Partner from "@/components/sections/home/partner";
import Social from "@/components/sections/home/social";
import Scroll from "@/components/sections/home/scroll";
import Media from "@/components/sections/home/media";
import Work from "@/components/sections/home/work";
import Comment from "@/components/sections/home/comment";
import Customer from "@/components/sections/home/customer";

export default function Home() {
  return (
    <main>
    <PublicLayout>
        <About />
        <Partner />
        <Social />
        <Scroll />
        <Media />
        <Work />
        <Comment />
        <Customer/>
    </PublicLayout>
    </main>
  )
}
