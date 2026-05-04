import {
  Award,
  Camera,
  Clock,
  Globe,
  Heart,
  MapPin,
  Mountain,
  Phone,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  camera: Camera,
  clock: Clock,
  globe: Globe,
  heart: Heart,
  mountain: Mountain,
  "map-pin": MapPin,
  phone: Phone,
  shield: Shield,
  users: Users,
}

export function getCmsIcon(iconName: string) {
  return iconMap[iconName] ?? Shield
}
