import Avatar from "@/components/Avatar"
import Card from "@/components/Card"
import Navigation from "@/components/Navigation"
import PostCard from "@/components/PostCard"
import PostFormCard from "@/components/PostFormCard"
import Link from "next/link"

const Home = () => {
  return (
    <div className="flex mt-4  max-w-4xl mx-auto gap-6 ">

      <div className="w-4/12">
        <Navigation />
      </div>
      <div className="8/12">
        <PostFormCard />
        <PostCard />
      </div>

    </div>

  )
}

export default Home