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

const CONTACT_URL = 'https://auto.forgescloud.com/webhook/0c68fd76-59f9-4904-a044-e33f1fd3dc8f'

export function ContactFormModal({ trigger }: ContactFormModalProps) {
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [email, setEmail] = useState('');

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault();

            await axios.post(CONTACT_URL, {
                name,
                whatsapp,
                email,
                source: "deployer"
            })

            toast.success('Solicitação enviada, por favor cheque seu E-mail!');

            setOpen(false);
            setName('');
            setWhatsapp('');
            setEmail('');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-gray-800">
                        Publique agora mesmo!
                    </DialogTitle>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name">Nome</Label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Seu nome" required />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="whatsapp">WhatsApp</Label>
                        <Input
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder="seu@email.com"
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full mt-2">
                        Enviar
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}
