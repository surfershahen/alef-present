
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ArrowLeft, User, Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/shared/section-wrapper";
import { FadeIn } from "@/components/shared/fade-in";

const formSchema = z.object({
  name: z.string().min(2, { message: "الاسم يجب أن يحتوي على حرفين على الأقل." }),
  phone: z.string().min(9, { message: "الرجاء إدخال رقم هاتف صحيح." }),
  email: z.string().email({ message: "الرجاء إدخال بريد إلكتروني صحيح." }),
  city: z.string().min(2, { message: "الرجاء إدخال اسم المدينة." }),
});

export function RegistrationFormSection() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            phone: "",
            email: "",
            city: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        toast({
            title: "تم التسجيل بنجاح!",
            description: "سنتواصل معك قريبًا لتأكيد التفاصيل. شكرًا لك.",
            variant: "default",
            duration: 5000,
        });
        form.reset();
    }

    return (
        <SectionWrapper id="registration-form">
            <motion.div 
                className="absolute top-0 -translate-x-1/2 left-1/2 w-[200%] h-48 bg-primary/5 blur-3xl -z-10"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
            <FadeIn>
                <Card className="max-w-2xl mx-auto shadow-2xl border-primary/20 bg-card/80 backdrop-blur-sm">
                    <CardHeader className="text-center p-8">
                        <CardTitle className="font-headline text-4xl md:text-5xl font-bold">
                            سجّل الآن واضمن مكانك
                        </CardTitle>
                        <CardDescription className="text-lg text-muted-foreground mt-2">
                            املأ التفاصيل أدناه، وسنتواصل معك لتأكيد تسجيلك ودفع الرسوم.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8 pt-0">
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>الاسم الكامل</FormLabel>
                                            <div className="relative">
                                                <User className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                <FormControl>
                                                    <Input {...field} className="pr-10" />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>رقم الهاتف</FormLabel>
                                            <div className="relative">
                                                <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                <FormControl>
                                                    <Input type="tel" {...field} className="pr-10" />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>البريد الإلكتروني</FormLabel>
                                            <div className="relative">
                                                <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                <FormControl>
                                                    <Input type="email" {...field} className="pr-10" />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>المدينة</FormLabel>
                                            <div className="relative">
                                                <MapPin className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                                                <FormControl>
                                                    <Input {...field} className="pr-10" />
                                                </FormControl>
                                            </div>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full font-bold text-lg py-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                                بدي احجز مكاني الان!
                                    <ArrowLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
            </FadeIn>
        </SectionWrapper>
    );
}
