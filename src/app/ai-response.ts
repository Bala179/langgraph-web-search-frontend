export interface AiResponse { 
  content: string,
  additional_kwargs: any,
  response_metadata: any,
  type: string,
  name: any,
  id: any,
  example: boolean,
  tool_calls: any,
  invalid_tool_calls: any,
  usage_metadata: any
}
