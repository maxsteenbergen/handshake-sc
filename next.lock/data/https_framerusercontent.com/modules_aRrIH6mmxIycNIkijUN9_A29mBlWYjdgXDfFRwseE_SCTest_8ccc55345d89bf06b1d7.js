import{jsx as _jsx}from"react/jsx-runtime";import{useState}from"react";import{motion}from"framer-motion";import{addPropertyControls,ControlType}from"framer";import styled from"styled-components";// Welcome to Code in Framer
// Get Started: https://www.framer.com/docs/guides/
/**
 * These annotations control how your component sizes
 * Learn more: https://www.framer.com/docs/guides/auto-sizing
 *
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */ const Box=styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;const TintedBox=styled(motion.div)`
    margin: 50px;
    padding: 75px;
    border-radius: 30px;
`;export default function SCTest(props){const{tint,style}=props;const[active,setActive]=useState(false);return(/*#__PURE__*/ _jsx(Box,{style:{...style},children:/*#__PURE__*/ _jsx(TintedBox,{onTap:()=>setActive(!active),whileHover:{rotate:90},animate:{scale:active?1.25:1},style:{backgroundColor:tint}})}));};SCTest.defaultProps={tint:"#09F"};addPropertyControls(SCTest,{tint:{title:"Tint",type:ControlType.Color}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"SCTest","slots":[],"annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./SCTest.map