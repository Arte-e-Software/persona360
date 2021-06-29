USE [FOC]
GO

/****** Object:  Table [dbo].[NODE_cpaResposta]    Script Date: 29/10/2019 17:33:41 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[NODE_cpaResposta](
	[idResposta] [int] IDENTITY(1,1) NOT NULL,
	[idRespondente] [int] NOT NULL,
	[CodPergunta] [varchar](14) NOT NULL,
	[idProfessor] [int] NOT NULL,
	[Aspecto] [varchar](50) NOT NULL,
	[Resposta] [int] NOT NULL,
	[indexElemento] [varchar] (20) NOT NULL,
	[Data] [datetime] NOT NULL,
 CONSTRAINT [PK_NODE_cpaResposta] PRIMARY KEY CLUSTERED 
(
	[idResposta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

