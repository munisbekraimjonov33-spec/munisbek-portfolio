import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Send, MapPin, Loader2, Youtube } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Ismni kiriting'),
            email: Yup.string().email('Noto\'g\'ri email').required('Emailni kiriting'),
            message: Yup.string().required('Xabar yozing'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setStatus('loading');

            const token = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
            const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;

            if (!token || !chatId || chatId === 'YOUR_CHAT_ID_HERE') {
                alert('Telegram sozlamalari noto\'g\'ri (.env faylni tekshiring)');
                setStatus('error');
                return;
            }

            const text = `
<b>🔔 Yangi Xabar (Portfolio)</b>

👤 <b>Ism:</b> ${values.name}
📧 <b>Email:</b> ${values.email}
📝 <b>Xabar:</b>
${values.message}
      `;

            try {
                await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
                    chat_id: chatId,
                    text: text,
                    parse_mode: 'HTML',
                });
                setStatus('success');
                resetForm();
                setTimeout(() => setStatus('idle'), 5000);
            } catch (error) {
                console.error('Telegram Error:', error);
                setStatus('error');
            }
        },
    });

    return (
        <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
                        Bog'lanish
                    </h1>
                    <p className="text-xl text-slate-500 dark:text-slate-400">
                        Keling, navbatdagi loyihangizni birgalikda yarataylik.
                    </p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 grid md:grid-cols-5">

                    {/* Info Sidebar */}
                    <div className="bg-slate-900 dark:bg-slate-950 text-white p-10 md:col-span-2 flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Ma'lumot</h3>
                            <p className="text-slate-300 mb-8">
                                Sizda savol bormi yoki hamkorlik qilmoqchimisiz? Quyidagi forma orqali xabar qoldiring.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Youtube className="text-red-600 mt-1" />
                                    <div>
                                        <p className="font-bold">YouTube</p>
                                        <a href="https://youtube.com/@Zortex_play" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                                            @Zortex_play
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="text-primary mt-1" />
                                    <div>
                                        <p className="font-bold">Joylashuv</p>
                                        <p className="text-slate-400">Samarqand, O'zbekiston</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-slate-500">
                                &copy; 2026 Munisbek Raimjonov
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="p-10 md:col-span-3 bg-white dark:bg-slate-900">
                        <form onSubmit={formik.handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Ism</label>
                                <input
                                    type="text"
                                    {...formik.getFieldProps('name')}
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-slate-900 dark:focus:border-white outline-none transition-colors dark:text-white font-medium"
                                    placeholder="Ismingiz"
                                    disabled={status === 'loading'}
                                />
                                {formik.touched.name && formik.errors.name && (
                                    <p className="text-red-500 text-xs mt-1 font-bold">{formik.errors.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Email</label>
                                <input
                                    type="email"
                                    {...formik.getFieldProps('email')}
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-slate-900 dark:focus:border-white outline-none transition-colors dark:text-white font-medium"
                                    placeholder="pochta@manzil.uz"
                                    disabled={status === 'loading'}
                                />
                                {formik.touched.email && formik.errors.email && (
                                    <p className="text-red-500 text-xs mt-1 font-bold">{formik.errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-900 dark:text-white mb-2">Xabar</label>
                                <textarea
                                    rows="4"
                                    {...formik.getFieldProps('message')}
                                    className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 rounded-xl focus:border-slate-900 dark:focus:border-white outline-none transition-colors dark:text-white font-medium resize-none"
                                    placeholder="Loyihangiz haqida..."
                                    disabled={status === 'loading'}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <p className="text-red-500 text-xs mt-1 font-bold">{formik.errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? (
                                    <Loader2 size={18} className="animate-spin" />
                                ) : (
                                    <>
                                        Yuborish <Send size={18} />
                                    </>
                                )}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-500 text-center font-bold">Xabar muvaffaqiyatli yuborildi!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 text-center font-bold">Xatolik yuz berdi. Qaytadan urinib ko'ring.</p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
