'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

interface ContactFormModalProps {
    trigger: ReactNode;
}

const CONTACT_URL = 'https://ar.forgescloud.com/subscribe'

export function ContactFormModal({ trigger }: ContactFormModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');
    const [gdpr, setGdpr] = useState(false);
    const [hp, setHp] = useState("");

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            // await axios.post(CONTACT_URL, {
            //     name,
            //     whatsapp,
            //     email,
            //     source: "deployer",
            //     list: "Gl2TpE4aL763iNUJNFqsIH892w",
            //     gdpr,
            //     hp
            // })

            await fetch(CONTACT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    whatsapp,
                    email,
                    source: "deployer",
                    list: "Gl2TpE4aL763iNUJNFqsIH892w",
                    gdpr,
                    hp
                }),
            });

            toast.success('Solicitação enviada, por favor cheque seu E-mail!');

            setOpen(false);
            setName('');
            setWhatsapp('');
            setEmail('');

        } catch (error) {
            console.error(error);
        }
    };


    // <form action="https://ar.forgescloud.com/subscribe" method="POST" accept-charset="utf-8">
    //     <label for="name">Name</label><br />
    //     <input type="text" name="name" id="name" />
    //     <br />
    //     <label for="email">Email</label><br />
    //     <input type="email" name="email" id="email" />
    //     <br />
    //     <label for="whatsapp">whatsapp</label><br />
    //     <input type="text" name="whatsapp" id="whatsapp" /><br /><br />
    //     <input type="checkbox" name="gdpr" id="gdpr" />
    //     <span><strong>Marketing permission</strong>: I give my consent to 0002 - Deployer to be in touch with me via email using the information I have provided in this form for the purpose of news, updates and marketing.</span>
    //     <br /><br />
    //     <span><strong>What to expect</strong>: If you wish to withdraw your consent and stop hearing from us, simply click the unsubscribe link at the bottom of every email we send or contact us at oi@internettools.com.br. We value and respect your personal data and privacy. To view our privacy policy, please visit our website. By submitting this form, you agree that we may process your information in accordance with these terms.</span>
    //     <br /><br /><div style="display:none;">
    //         <label for="hp">HP</label><br />
    //         <input type="text" name="hp" id="hp" />
    //     </div>
    //     <input type="hidden" name="list" value="Gl2TpE4aL763iNUJNFqsIH892w" />
    //     <input type="hidden" name="subform" value="yes" />
    //     <input type="submit" name="submit" id="submit" />
    // </form>

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-800">
                        Publique agora mesmo!
                    </DialogTitle>
                </DialogHeader>
                <form action="https://ar.forgescloud.com/subscribe" method="POST" accept-charset="utf-8" className="space-y-4">

                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Seu nome"
                            required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input
                            id="whatsapp"
                            name="whatsapp"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            type="tel"
                            placeholder="(99) 99999-9999"
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="seu@email.com"
                            required
                        />
                    </div>

                    <div className="flex items-start gap-2">
                        <input
                            id="gdpr"
                            name="gdpr"
                            type="checkbox"
                            checked={gdpr}
                            onChange={(e) => setGdpr(e.target.checked)}
                            className="mt-1"
                        />
                        <Label htmlFor="gdpr" className="text-sm leading-snug">
                            Eu autorizo o Deployer a entrar em contato comigo por e-mail com notícias, atualizações e ofertas com base nas informações fornecidas neste formulário.
                        </Label>
                    </div>

                    {/* Honeypot escondido */}
                    <div style={{ display: "none" }}>
                        <Label htmlFor="hp">HP</Label>
                        <Input
                            id="hp"
                            value={hp}
                            onChange={(e) => setHp(e.target.value)}
                            type="text"
                            name="hp"
                        />
                    </div>

                    <input type="hidden" name="list" value="Gl2TpE4aL763iNUJNFqsIH892w" />
                    <input type="hidden" name="subform" value="yes" />

                    <Button disabled={!gdpr} name="submit" id="submit" type="submit" className="w-full mt-2">
                        Enviar
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
