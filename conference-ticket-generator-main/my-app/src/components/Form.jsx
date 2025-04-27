import squiggyTop from "../assets/pattern-squiggly-line-top.svg";
import squiggyBottom from "../assets/pattern-squiggly-line-bottom.svg";
import lines from "../assets/pattern-lines.svg";
import circle from "../assets/pattern-circle.svg";
import logo from "../assets/logo-full.svg";
import infoIcon from "../assets/icon-info.svg";
import uploadIcon from "../assets/icon-upload.svg";
const Form = ({ data, setData }) => {

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 500 * 1024) {
                const avatarError = document.getElementById('avatarError');
                const avatarInfo = document.getElementById('avatarInfo');
                avatarInfo.classList.add('hidden');
                avatarError.classList.remove('hidden');
                return;
            }
            document.getElementById('avatarError').classList.add('hidden');
            document.getElementById('avatarInfo').classList.remove('hidden');

            const reader = new FileReader();
            reader.onloadend = () => {
                setData({ ...data, avatar: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };
    const removeImage = (e) => {
        e.preventDefault();
        setData({ ...data, avatar: null });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // form vaidation
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            const emailError = document.getElementById('emailError');
            emailError.classList.remove('hidden');
            return;
        }
        setData({ ...data, submitted: true });
    }
    return (
        <div className="relative flex bg-[url(/background-mobile.png)] md:bg-[url(/background-desktop.png)] bg-cover bg-no-repeat bg-center min-h-screen">

            <img
                src={lines}
                className="fixed top-0 right-0 pointer-events-none"
            />
            <img
                src={circle}
                className="absolute top-[535px] right-[285px] pointer-events-none"
            />
            <img
                src={squiggyTop}
                className="absolute top-20 right-0 pointer-events-none"
            />
            <img
                src={squiggyBottom}
                className="absolute bottom-0 pointer-events-none"
            />

            <div className="flex flex-col text-neutral-0 pt-10 items-center font-inco mx-auto max-w-4xl px-2 text-center text-[20px]">
                <img src={logo} alt="logo" />
                <h1 className="text-[58px] font-bold pt-[62px] leading-[64px]">
                    Your Journey to Coding Conf 2025 Starts Here!
                </h1>
                <p className="pt-5 text-[23px]">
                    Secure your spot at next year&apos;s biggest coding conference.
                </p>
                <form className="w-[460px]">

                    {/* avatar upload part start*/}
                    <div className="mt-10">
                        <label htmlFor="avatar" className="tracking-tight text-left mb-1 block">Upload Avatar</label>
                        <div className="z-0 relative border border-dashed border-neutral-300 flex flex-col gap-2 items-center justify-center p-4 rounded-xl bg-neutral-700/50 hover:bg-neutral-700/75 ">
                            <input
                                id="avatar"
                                name="avatar"
                                type="file"
                                accept="image/png, image/jpeg"
                                className="hidden"
                                onChange={handleImageUpload}

                            />
                            {data.avatar ?
                                <>
                                    <img src={data.avatar} className="w-12 object-cover aspect-square rounded-xl border-neutral-300 border-[0.2px]" />
                                    <div className="flex gap-2 items-center ">
                                        <button
                                            type="button"
                                            className="bg-neutral-700 py-1 px-2 rounded-lg text-sm tracking-wide hover:cursor-pointer hover:underline "
                                            onClick={removeImage}>Remove image</button>

                                        <button
                                            type="button"
                                            className="bg-neutral-700 py-1 px-2 rounded-lg text-sm tracking-wide   hover:underline hover:cursor-pointer"
                                            onClick={() => document.getElementById('avatar').click()}>Change image</button>
                                    </div>
                                </>
                                :
                                <>
                                    <div className="rounded-xl bg-neutral-700 border-neutral-300 border-[0.2px] aspect-square w-12">
                                        <img src={uploadIcon} alt="upload icon" className="p-2" />
                                    </div>
                                    <p className="text-[1rem]">Drag and drop or click to upload</p>
                                    <button
                                        type="button"
                                        className="opacity-0 bg-red-300 absolute inset-0 w-full h-full hover:cursor-pointer"
                                        onClick={() => document.getElementById('avatar').click()}
                                        aria-label="Upload file"
                                    >
                                        MEOW
                                    </button>

                                </>
                            }


                        </div>

                        <div className="flex items-center text-[12px] text-neutral-300 mt-[11px] gap-2 tracking-[-0.015em]">
                            <img src={infoIcon} alt="info" />
                            <p id="avatarInfo">
                                Upload your photo (JPG or PNG, max size: 500KB).
                            </p>
                            <p id="avatarError" className="hidden text-red-600">
                                File too large. Please upload a file under 500KB.
                            </p>
                        </div>
                    </div>
                    {/* avatar upload part end*/}

                    <div className="mt-5">
                        <label htmlFor="name" className="tracking-tight text-left mb-1 block">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={(e) => setData({ ...data, name: e.target.value })}
                            className="mt-1 bg-neutral-700/50 text-neutral-0 w-full h-14 outline-none rounded-xl border border-neutral-300 px-4 tracking-tighter hover:bg-neutral-700/75 "

                        />
                    </div>



                    <div className="mt-[1.4rem]">
                        <label htmlFor="email" className="tracking-tight text-left mb-1 block">
                            Email Address
                        </label>
                        <input

                            type="email"
                            name="email"
                            onChange={(e) => setData({ ...data, email: e.target.value })}
                            className="mt-1 bg-neutral-700/50 text-neutral-0 w-full h-[3.4rem] outline-none rounded-xl border-[1px] border-neutral-300 px-[15px] tracking-tighter hover:bg-neutral-700/75"
                        />
                        <div className="hidden" id="emailError">
                            <div className="flex items-center  text-[12px]  mt-[11px] gap-2 tracking-[-0.015em] text-red-600 " >
                                <img src={infoIcon} alt="info" />
                                <p id="emailInfo">Please enter a valid email address.</p>

                            </div>
                        </div>
                    </div>

                    <div className="mt-[1.4rem]">
                        <label htmlFor="githubUsername" className="tracking-tight text-left mb-1 block">GitHub Username</label>
                        <input
                            type="text"
                            name="githubUsername"
                            onChange={(e) => setData({ ...data, githubUsername: e.target.value })}
                            className="mt-1 bg-neutral-700/50 text-neutral-0 w-full h-[3.4rem] outline-none rounded-xl border-[1px] border-neutral-300 px-[15px] tracking-tighter hover:bg-neutral-700/75"

                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="cursor-pointer bg-orange-500 hover:bg-orange-700 rounded-xl w-full h-[3.4rem] my-[1.5rem] text-neutral-900 font-bold tracking-[-0.01em]">
                        Generate My Ticket
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form