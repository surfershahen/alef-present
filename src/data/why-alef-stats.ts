
import { type LucideIcon } from "lucide-react";
import { GraduationCap, Users, Handshake } from "lucide-react";

type Stat = {
    icon: LucideIcon;
    value: number;
    label: string;
    suffix?: string;
    isText?: boolean;
}

export const stats: Stat[] = [
    {
        icon: GraduationCap,
        value: 2500,
        label: "خريج وخرّيجة راضيين",
        suffix: "+",
    },
    {
        icon: Users,
        value: 1,
        label: "طاقم يهودي يتحدث عربي بطلاقة",
        isText: true,
    },
    {
        icon: Handshake,
        value: 1,
        label: "شراكات مع תנובה، بلديات، وجمعيات",
        isText: true,
    },
];
