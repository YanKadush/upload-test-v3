import {FC} from "react";
import './modal.css'
import {User} from "./types.ts";

type ModalProps = {
    onClose: VoidFunction;
    data: User[];
    isSuccess: boolean;
}

export const Modal: FC<ModalProps> = ({ onClose, data }) => (
    <div className='overlay' onClick={onClose}>
        <div className='modal'>
            <div>
                <div className='content'>
                    {data && data.map(({ id, first_name, last_name, email, avatar }: User) => (
                        <div className='card' key={id}>
                            <img className='avatar' src={avatar} alt='avatar' />
                            <p className='text'>Name: {first_name} {last_name}</p>
                            <p className='text'>Email: {email}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <p className='tip'>Just click somewhere to close</p>
    </div>
);