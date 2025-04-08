
import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Avatar, Button} from "@heroui/react";
import { useRouter } from "next/router";

export default function UserShowElement({src:src,username:username,name:name,text:text,url:url}:{src:string,username:string,name:string,text:string,url:string}) {
  const [isFollowed, setIsFollowed] = React.useState(false);
  const r = useRouter()
  return (
    <Card className="max-w-[400px] min-h-[200px] max-h-[200px] mdi:max-w-[100%]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <Avatar
            isBordered
            radius="full"
            size="md"
            src={src}
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{name}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{name}</h5>
          </div>
        </div>
        <Button
          className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
          color="primary"
          radius="full"
          size="sm"
          variant={isFollowed ? "bordered" : "solid"}
          onPress={() => {
            setIsFollowed(!isFollowed)
            r.push(url)
            }}
        >
          {isFollowed ? "acessar" : "acessar"}
        </Button>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>{text}</p>
        <span className="pt-2">
          #Developer fullstack
          <span aria-label="computer" className="py-2" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
        </div>
        <div className="flex gap-1">
        </div>
      </CardFooter>
    </Card>
  );
}






