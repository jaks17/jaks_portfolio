import { animate, motion } from "framer-motion";

//variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};


// calculate the revers index for stored delay 
const reveseIndex = (index)=> {
    const totalSteps = 6; // number of steps
     return totalSteps - index - 1;
}

const Stairs = () => {
    return (
    <>
    {/* render 6 motion divs, each representing a step of stairs.
    Each div will have the same the same animation define by the stairAnimation object.
    The delay for div is calculated sinomically based on it's reversed index.
    creating a stroggered effect with decreasing delay for each subsequent step.
    */}
    {[...Array(6)].map((_, index)=>{
        return(
        <motion.div key= {index} variants={stairAnimation}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
            duration: 0.4,
            ease: "easeInOut",
            delay: reveseIndex(index) * 0.1, 
        }}
        className="h-full w-full bg-white relative"
        />
    );
    })}
    </>
    );
};

export default Stairs;