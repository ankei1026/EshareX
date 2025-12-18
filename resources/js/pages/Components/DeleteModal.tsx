import { Button } from "@/components/ui/button"
import { router } from "@inertiajs/react"
import { DeleteIcon } from "lucide-react"

interface DeleteModalProps {
    url: string
}

const DeleteModal = ({ url }: DeleteModalProps) => {
    return (
        <div className="relative h-100 w-120">
            <div className="border-2 text-center border-black bg-violet-100 flex items-center justify-center z-10">
                <p>Are you sure to delete this?</p>
                <DeleteIcon />
                <div>
                    <Button onClick={() => router.delete(`${url}`)}>Delete</Button>
                    <Button>Cancel</Button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;