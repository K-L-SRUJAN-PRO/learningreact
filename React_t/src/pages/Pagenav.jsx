import { ChevronLeft, House, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { themes } from '../Themecon';


const Pagenav = () => {
    // In your child component
    const {natheme}=useContext(themes)
    const {setftheme}=useContext(themes)
    const {setntheme}=useContext(themes)
    const {setnatheme}=useContext(themes)
    const {seththeme}=useContext(themes)
    

    console.log(natheme); 
   

    let nav = useNavigate();

    const changet=()=>{
        if(natheme=="nadark"){
            seththeme('hlight');
            setnatheme('nalight');
            setntheme('nlight');
            setftheme('flight')
        }
        else{
            seththeme('hdark');
            setnatheme('nadark');
            setntheme('ndark');
            setftheme('fdark')
        }
    }

    return (

        <div className={natheme}>

            <div >
                <button className='bg-cyan-700 broder border px-2 py-2 rounded-xl m-2 active:scale-95'
                    onClick={() => { nav('/') }}>
                    <House /></button>
                <button className='bg-cyan-700 broder border px-2 py-2 rounded-xl m-2 active:scale-95'
                    onClick={() => { nav(-1) }}>
                    <ChevronLeft /></button>
                <button className='bg-cyan-700 broder border px-2 py-2 rounded-xl m-2 active:scale-95 '
                    onClick={() => { nav(+1) }}>
                    <ChevronRight />
                </button>
            </div>
            <div>
                <button className=' border border-rose-50 rounded h-full px-3 py-1 active:scale-95' onClick={changet}>Change Theme</button>
            </div>
        </div>
    )
}

export default Pagenav