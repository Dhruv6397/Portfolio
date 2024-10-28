import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Icons() {
  return (
    <div className=" mt-[4%] max-w-fit flex space-x-4 ">
      <a href="https://www.linkedin.com/in/dhruv6397/" target="_blank" rel="noopener noreferrer">
        <div className="bg-blue-500 p-3 rounded-full image-3d">
          <LinkedInIcon className="text-white transform hover:scale-105 transition-transform duration-300 " style={{ fontSize: 30 }} />
        </div>
      </a>
      
      <a href="https://twitter.com/dhruvverma____" target="_blank" rel="noopener noreferrer">
        <div className="bg-red-500 p-3 rounded-full  image-3d">
          <XIcon className="text-white transform hover:scale-105 transition-transform duration-300" style={{ fontSize: 30 }} />
        </div>
      </a>
      
      <a href="https://github.com/dhruv6397" target="_blank" rel="noopener noreferrer">
        <div className="bg-gray-800 p-3 rounded-full image-3d">
          <GitHubIcon className="text-white transform hover:scale-105 transition-transform duration-300" style={{ fontSize: 30 }} />
        </div>
      </a>
      <a href="https://www.instagram.com/mommentsmuse/" target="_blank" rel="noopener noreferrer">
        <div className="p-3 rounded-full  image-3d" style={{ background: 'linear-gradient(45deg, #F58529, #DD2A7B, #8134AF, #515BD4)' }}>
          <InstagramIcon className="text-white transform hover:scale-105 transition-transform duration-300" style={{ fontSize: 30 }} />
        </div>
      </a>

    </div>
  );
}
