
import styles from '@/styles/NavTop.module.css'
import styles2 from '@/styles/NavLeft.module.css';
import Image from 'next/image';
import Link from 'next/link';

import useModal from '../hooks/useModal'
import Modal from '../components/Modal'


import { useRouter } from 'next/router'
/* Temporary Modal Imports */
import FormGoogle from '../components/FormGoogle'
import flamesIcon from '../public/flames-icon.webp'


export default function NavTop () {

  
  const { modals, handleModal } = useModal();
  const router = useRouter();

    return ( <>
    <nav className={styles.navTop}>
        <ul>
            <li><Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg></Link></li>
            <li><Link href="/"><Image src="/flames-logo-white.webp" className={styles.logo} height="32" width="236" alt="Flames Agency" /></Link></li>
            <li onClick={() => handleModal("modalBurgerMenu")}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg></li>
        </ul>
    </nav>

    <Modal id="modalBurgerMenu" isOpen={modals["modalBurgerMenu"]} setIsOpen={handleModal}>




    <div>
    <nav >


        <Link href="/">
          <Image className={styles2.logo} src={flamesIcon} height="50" width="50" alt="Flames" />
        </Link>

        <ul className={styles2.menu}>

          <li>
            <Link href="/">
            <span>
            {router.asPath === '/' ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
  <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
</svg>

            : 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

            }
            </span>
            Home
            </Link>
          </li>

          <li>
            <Link href="/favorites">
            <span>
            {router.asPath === '/favorites' ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
</svg>

            : 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

            }
            </span>
            Favs (not ready)
            </Link>
          </li>
          <li>
          <Link href="/captainmarvel">
            <span>
            {router.asPath === '/captainmarvel' ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
</svg>


            : 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>


            }
            </span>
            Dummy Profile
            </Link>
          </li>


          <li>
            <Link href="/contact">
            <span>
            {router.asPath === '/contact' ? 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
</svg>


            : 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>


            }
            </span>
            Contact
            </Link>
          </li>


      </ul>

      

      <ul className='buttons'>
          <li onClick={() => handleModal("modalGoogleForm")} className='button'>GET PROMOTED</li>
      </ul>

<Modal id="modalGoogleForm" isOpen={modals["modalGoogleForm"]} setIsOpen={handleModal}>

<FormGoogle
  inputs={[

    {
      type: 'text',
      placeholder: 'Instagram',
      name: 'instagram',
      required: true,
    },
    {
      type: 'email',
      placeholder: 'Your Email',
      name: 'email',
      required: true,
    },
    {
      type: 'radio',
      placeholder: 'form_tags',
      name: 'form_tags',
      required: true,
      options: [
        { value: 'fan', label: 'I’m a Fan' },
        { value: 'model', label: 'I’m a Model' },
      ],
    },
  ]}
  formTitle="Join Flames"
  formDesc="Thailand’s Sexiest Promo Agency"
  buttonText="Join For Free"
  smallPrint="You must be aged 18+"
  formSuccessTitle="Application Sent"
  formSuccessDesc="We will be in touch soon. Make sure you’re following @flamesagency and @thaiflames on Instagram."
/>

</Modal>


   
      </nav>
    </div>




</Modal>



    </>
    )
  }