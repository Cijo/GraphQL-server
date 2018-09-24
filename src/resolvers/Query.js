// params
  // info- The info object carries information about the incoming GraphQL query (in the form of a query AST[abstract syntax tree]).
  // context- The context argument is a JavaScript object that every resolver in the resolver chain can read from and write to - it thus basically is a means for resolvers to communicate. 

function feed(parent, args, context, info) {
    return context.db.query.links({}, info)
  }
  
  module.exports = {
    feed,
  }