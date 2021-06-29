USE [FOC]
GO

/****** Object:  Table [dbo].[NODE_cpaRespondente]    Script Date: 31/10/2019 18:33:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[NODE_cpaRespondente](
	[idRespondente] [int] IDENTITY(1,1) NOT NULL,
	[remoteAddress] [varchar](5000) NOT NULL,
	[Cpa] [varchar](100) NOT NULL,
	[Ano] [int] NOT NULL,
	[Semestre] [int] NOT NULL,
	[Agente] [varchar](50) NOT NULL,
	[Matricula] [char](15) NULL,
	[Turma] [char](10) NULL,
	[Curso] [char](3) NULL,
	[idProfessor] [int] NULL,
	[idMantenedora] [int] NULL,
	[Data] [datetime] NOT NULL,
 CONSTRAINT [PK_NODE_cpaRespondente] PRIMARY KEY CLUSTERED 
(
	[idRespondente] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

