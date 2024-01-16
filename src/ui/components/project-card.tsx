import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/primitives/card";
import { Button } from "@/ui/primitives/button";
import { BrandXIcon } from "@/ui/icons/brand-x-icon";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { Badge } from "@/ui/primitives/badge";
import { ProjectCardProps } from "@/lib/schemas/project-card-props";

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card className={"my-4 p-2 rounded-3xl"}>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.description}</CardDescription>
        <CardDescription className={"flex flex-row gap-2 mt-3"}>
          <Badge className={"rounded-2xl"}>{props.stage}</Badge>
          <Badge className={"rounded-3xl"} variant={"secondary"}>
            {props.date}
          </Badge>
          <Badge className={"rounded-3xl"} variant={"outline"}>
            {props.timeline}
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>{props.summary}</CardContent>
      <CardFooter className={"flex flex-row gap-2 max-[510px]:flex-wrap"}>
        <a href={props.official} target={"_blank"}>
          <Button className={"rounded-3xl"}>
            Official <ArrowTopRightIcon className={"ml-2"} />
          </Button>
        </a>
        <a href={props.knowMore} target={"_blank"}>
          <Button className={"rounded-3xl"} variant={"secondary"}>
            Know More <ArrowTopRightIcon className={"ml-2"} />
          </Button>
        </a>
        <a href={props.findUpdates} target={"_blank"}>
          <Button className={"rounded-3xl"} variant={"outline"}>
            Find Updates
            <BrandXIcon height={15} width={15} className={"ml-2"} />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
