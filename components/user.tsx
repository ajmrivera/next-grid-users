import React from 'react'
import { NextPage } from 'next';
import { UserType } from '../util/types';
import Image from 'next/image'

interface UserProps {
  user: UserType
}

const User : NextPage<UserProps> = ({ user }) => {
  const { id, email, avatar, first_name, last_name } = user;
  const bgImgSrc = "https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?w=1380&t=st=1671718861~exp=1671719461~hmac=da454f15a25815fcb9b8b8f3a90c3b7fbd67e977c0c948f2f23a20e0ba82370d"

  return (
    <div className="flex flex-col rounded-md border border-slate-300  align-center bg-slate-900 drop-shadow-2xl w-64 h-80">
      <p className='absolute bottom-2 left-2 text-xs font-regular italic text-slate-500'>{id}</p>
      <div className='w-full h-24'>
        <Image src={bgImgSrc} alt="bg image" width={0} height={0} className="w-full" />
      </div>
      <div className="pt-20 px-20 absolute">
        <Image src={avatar} alt={`${first_name}'s picture`} width={100} height={100} className="rounded-full justify-self-center border-2 border-slate-300" />
      </div>
      <div className="text-center mt-24">
        <p className="text-xl font-semibold text-slate-100">{first_name} {last_name}</p>
        <p className="text-lg text-slate-300">{email}</p>
      </div>
    </div>
  )
}

export default User