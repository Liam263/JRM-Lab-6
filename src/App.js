import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  const [selectedImg, setSelectedImg] = useState(null);
  
  const handleImgUpload = (event) => {
    // console.log(event.target.files[0])
    if (setSelectedImg) {
      const uploadEndPoint = 'http://localhost:3001/upload';
      const formData = new FormData();
      formData.append('avatar', selectedImg);

      fetch(uploadEndPoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      
      }).then((response)=>response.json())
        .then((data)=> {
          toast.success('Image uploaded successfully')
        })
        .catch((error) => toast.error(error))
    }
    setSelectedImg(event.target.files[0]);
  }
  return (
    <div className='grid grid-cols-5'>
      <div className='col-span-2 bg-blue-300'>
        <div className='flex flex-col mb-4 justify-center items-center'>
          <h2 className='text-2xl text-gray-500'>Profile</h2>
          <img src='https://th.bing.com/th/id/OIP.caK28-NwQV5RX5HJgDhjZwHaHa?w=184&h=184&c=7&r=0&o=5&pid=1.7'
            className='rounded-full h-[100px] border-4 border-gray-500' />
          <div className='text-2xl font-semibold'>Thanh Lam Nguyen</div>
          <div className='text-gray-500'>Software engineer</div>
        </div>
        <div className='grid grid-cols-3'>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-2xl'>21</div>
            <div>Shots</div>
          </div>
          <div className='flex flex-col items-center justify-center' >
            <div className='text-2xl'>238</div>
            <div>Followers</div>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-2xl'>101</div>
            <div>Following</div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-3'>
          <input type='file' className='bg-gray-600 p-4 rounded-xl w-[200px] text-gray-50 m-5 text-center'
            placeholder='Upload new avatar'
            onChange={handleImgUpload} />
          <div className='text-gray-500'>New South Wales, Australia</div>
          <div className='text-gray-500 ml-[50px] mr-[20px] text-center'>I'm a web designer, I work in programs like figma, adobe photoshop, adobe illustrator</div>
        </div>


      </div>

      <div className='col-span-3 bg-violet-300 p-10'>
        <div className='mb-4 flex items-center justify-between'>
          <h2 className='text-l font-semibold'>Basic Info</h2>
          <div className='flex gap-5 h-[40px]'>
            <button className='bg-gray-600 p-4 rounded-xl  text-gray-50 '>Cancel</button>
            <button className='bg-gray-600 p-4 rounded-xl  text-gray-50'>Save</button>
          </div>

        </div>
        <hr></hr>
        <div className='grid grid-cols-5 gap-4'>
          <div className='col-span-3 '>
            <p>First Name</p>
            <input className='w-full rounded border-2' />
          </div>
          <div className='col-span-2'>
            <p>Last Name</p>
            <input className='w-full rounded border-2' />
          </div>
          <div className='col-span-5'>
            <p>Title </p>
            <input className='w-full rounded border-2' />
          </div>
          <div className='col-span-5'>
            <p>Email </p>
            <input className='w-full rounded border-2' />
          </div>
        </div>

        <div className='mt-4'>
          <p>ABOUT ME</p>
          <hr className='mt-4 mb-4'></hr>
          <textarea rows="4" cols="50" placeholder="Enter your paragraph" className='w-full rounded border-2'></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
