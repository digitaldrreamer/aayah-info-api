import Gemini from "gemini-ai";
import { GEMINI_KEY } from '$env/static/private'

const gemini = new Gemini(GEMINI_KEY)

export default gemini