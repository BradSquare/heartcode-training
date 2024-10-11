import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Shiba from "@/assets/shiba.jpg";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="p-5">
        Who am I?
        <Card>
            <CardHeader>
                <CardTitle>
                    Hello I am Bradley
                </CardTitle>
                <CardDescription>
                    I like to code lots
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Image alt="" src={Shiba} width={150} height={150}/>
                <div className="flex flex-row gap-2">
                    <p className="font-bold">Name:</p>
                    Bradley
                </div>
                <div className="flex flex-row gap-2"><p className="font-bold">Major:</p>Computer Science</div>
                <div className="flex flex-row gap-2"><p className="font-bold">Hobbies:</p>I like to code</div>
            </CardContent>
        </Card>
        <Alert>
            <Terminal className="h-4 w-4"/>
            <AlertTitle>Heads up</AlertTitle>
            <AlertDescription>I have added an alert</AlertDescription>
        </Alert>
    </div>
  );
}