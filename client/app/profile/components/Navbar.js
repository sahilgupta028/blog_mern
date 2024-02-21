import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const router = useRouter();
    const  username = localStorage.getItem('username');

    const logout = () => {
        localStorage.clear();
        router.push('/');
    }
    return (
      <nav className="bg-gradient-to-r from-purple-900 to-blue-900 p-4 flex font-mono">
  <div className="container mx-auto flex justify-between items-center">
    {/* <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fkts928pd%2Fproduction%2F0edce5f2a29f39d2266c1ded3a9107bfe806736a-357x352.png&tbnid=PO68UUvqEPfaoM&vet=12ahUKEwiDuZSo7LeEAxXma2wGHfpqAZ0QMyghegUIARCYAQ..i&imgrefurl=https%3A%2F%2Flogo.com%2Flogos%2Fblog-logo-maker&docid=cEK036w-fgIXoM&w=357&h=352&q=free%20logo%20for%20post%20writing&ved=2ahUKEwiDuZSo7LeEAxXma2wGHfpqAZ0QMyghegUIARCYAQ' alt='Blog' /> */}
    <Link href="/profilepage">
    <h1 className="text-white text-2xl font-bold underline">Welcome @{username}</h1>
    </Link>
    <div className="flex space-x-4">
      <Link href="/create">
        <button className="text-white hover:bg-purple-700 px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
          Create your Post
        </button>
      </Link>
      <Link href="/posts">
        <button className="text-white hover:bg-purple-700 px-4 py-2 rounded-md transition-all duration-300 ease-in-out">
          See All Posts
        </button>
      </Link>
      <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition-all duration-300 ease-in-out" onClick={logout}>
        Logout
      </button>
    </div>
  </div>
</nav>
    );
  };

export default Navbar;
