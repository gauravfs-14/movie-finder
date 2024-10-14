import { MovieCardProps } from "../types/MovieCardTypes"
import { AspectRatio } from "./ui/aspect-ratio"
import { Badge } from "./ui/badge"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card"
import { Separator } from "./ui/separator"

const MovieCard = ({ title, yearReleased, genre, runTime, plot, language, posterUrl }: MovieCardProps) => {
    return (
        <Card>
            <div className="w-[450px]">
                <AspectRatio ratio={16 / 9}>
                    <img src={posterUrl} alt="" className="rounded-md object-cover h-full w-full" />
                </AspectRatio>
            </div>
            <CardHeader>
                <CardTitle>
                    <span className="text-2xl">
                        {title}
                    </span>
                    {" ◆ "}
                    <span className="text-2xl">
                        {yearReleased}
                    </span>
                </CardTitle>
                <CardDescription>
                    <div className="flex space-x-1">
                        {genre.map(item => <Badge>{item}</Badge>)}
                    </div>
                    <p className="mt-2">{runTime} minutes</p>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-wrap max-w-[400px] mb-2">{plot.substring(0, 200)}...</p>
                <Separator />
            </CardContent>
            <CardFooter>
                <p className="flex space-x-2">
                    {language.map(item => <span>{item}</span>)}
                </p>
            </CardFooter>
        </Card>

    )
}

export default MovieCard